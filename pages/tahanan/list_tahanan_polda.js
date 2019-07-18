import React from 'react';
import styles from '../stylesheet';
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Alert
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import Badge from './badge';

class ListTahananPolda extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });

    constructor(props) {
        super();

        this.state = {
            disabledListItem:false,
            keyword:'',
            loading: false,
            data: [],
            page: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.getTahanan();
    }

    componentWillUnmount() {
        this.setState({
            disabledListItem:false
        });
    }

    makeRemoteRequest(){
        URL = `http://crimesocial.web.id/api/tahanan/ditahan?q=${this.state.keyword}&page=${this.state.page}`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_tahanan");
        myHeaders.append("base-url", this.props.navigation.state.params.url)
        
        fetch(URL,{
            headers: myHeaders,
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: this.state.page === 1 ? res : [...this.state.data, ...res],
                error: res.error || null,
                loading: false,
                refreshing: false
            });
        })
        .catch(error => {
            console.log(error)
            this.setState({ error, loading: false });
        });
    }

    getTahanan = () => {
        this.setState({
            loading: true
        }, 
        ()=>{
            this.makeRemoteRequest();
        });
    };

    capitalizeFirstLetter= (str) => {
        return str.replace(/\w\S*/g, (txt) =>{
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });        
    }

    handleRefresh = () => {
        this.setState(
            {
                keyword:'',
                page: 1,
                refreshing: true
            },
            () => {
                this.getTahanan();
            }
        );
    }

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },() => {
                this.getTahanan();
            }
        );
    };

    searchData=(text)=>{
        if(text == null) {
            this.handleRefresh();
        }
        else {
            this.setState({
                keyword:(text !== '') ?text:'',
                loading: true,
                page:1,
            },()=>{
                this.makeRemoteRequest()       
            });
        }
    }

    renderHeader = () => {
        return <SearchBar 
            lightTheme={false} 
            placeholderTextColor={'#fff'} 
            placeholder="Cari Tahanan" 
            showLoadingIcon={this.state.loading}
            onChangeText={this.searchData} />;
    }

    
    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#CED0CE"
                }}
                >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };    

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.withNavbar}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={this.capitalizeFirstLetter(item.nama)}
                            subtitle={this.capitalizeFirstLetter(item.alamat)}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.09)' }}
                            disabled={this.state.disabledListItem}
                            roundAvatar
                            avatar={{uri:item.image_utama}}
                            rightIcon={ <Badge lamaDitahan={item.lama_ditahanan} dilimpahkan={item.tanggal_dilimpahkan} />}
                            onPress={()=>{
                                this.props.navigation.navigate('TahananShowDitahan', {
                                    id_tahanan:item.id,
                                    name:item.nama,
                                    url:this.props.navigation.state.params.url
                                })
                            }}
                        />
                    )}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    onEndReached={this.handleLoadMore}
                />
            </View>            
        );
    }
}

export default ListTahananPolda;
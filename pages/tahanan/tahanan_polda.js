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
import Spinner from 'react-native-loading-spinner-overlay';

export default class TahananPolda extends React.Component {

    static  navigationOptions = ({ navigation }) => ({
        headerTitle : (
            <View style={{marginLeft:5, marginTop:10, flex:1, flexDirection:'row'}}>
                <View style={{ height: 40, paddingLeft:5, paddingTop:2,}}>
                    <Text style={{color:'black', fontSize:22, fontWeight:'bold'}}>Tahanan Narkoba</Text>
                    <Text style={{marginTop:-5}}>Polda Jatim</Text>
                </View>
            </View>
        ),
        headerTitleStyle: {
            fontSize:22,
        },
        headerStyle: {
            // elevation: 0,
        },
        headerTintColor:'#000',
    });

    constructor(props) {
        super();

        this.state = {
            keyword:'',
            loading: true,
            data: [],
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.getTahanan();
    }

    makeRemoteRequest(){
        URL = `http://surabaya.skckonline.net/api/kriminal/2/all`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_skck");

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



    render(){
        if (this.state.loading) {
            return (
                <Spinner visible={true} overlayColor='#fff' color="black" textContent={"Loading..."} textStyle={{color: '#000'}} />
            );
        }
        return (
            <View style={styles.withNavbar}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.full_name}
                            subtitle={`Total Tahanan : ${item.criminals_count}`}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.09)' }}
                            disabled={this.state.disabledListItem}
                            onPress={()=>{
                                this.props.navigation.navigate('ListTahananPolda', {
                                    name : item.full_name,
                                    url:item.url
                                })
                            }}
                        />
                    )}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            </View>
        );
    }

}

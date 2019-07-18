import React, { Component } from 'react';
import styles from '../stylesheet';
import { Text, View, Image, ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import { List, Tile, ListItem, Button } from "react-native-elements";
import Badge from './badge';
import Moment from 'moment';

export default class TahananShow extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            name:'',
            error: null,
            images:[],
            loading:true
        };
    }


    componentDidMount() {
        this.makeRemoteRequest();
    }

    capitalizeFirstLetter= (str) => {
        if(str == "" || str === null) {
            return str;
        } else {
            return str.replace(/\w\S*/g, (txt) =>{
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });  
        }
    }

    ambilTanggal=(tanggal) => {
        if(!tanggal) return '-';

        return Moment(tanggal).format('DD-MM-Y')
    }

    makeRemoteRequest(){
        URL = `http://crimesocial.web.id/api/tahanan/ditahan/${this.props.navigation.state.params.id_tahanan}`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_tahanan");
        if(this.props.navigation.state.params.url) {
            myHeaders.append("base-url", this.props.navigation.state.params.url)
        }

        fetch(URL, {
            headers: myHeaders,
        })
        .then(res => res.json())
        .then(res => {
            var images = res.image.map(function(num) {
                 var person = { source: { uri: num.image_url } };
                 return person;
            });
            this.setState({
                data: res,
                error: null,
                loading:false,
                image:images,
                name:res.nama
            });
        });
    }    
    
    render() {
        if(this.state.loading) {
            return (
                <View style = {[styles.withNavbar, {flex:1}]}>
                    <ActivityIndicator animating = {this.state.loading} size = "large" />
                </View>
            );

        }else{
            const data = this.state.data;
            return (
                <ScrollView style={[styles.withNavbar,styles.brown, styles.container]}>

                    <Tile
                    imageSrc={{uri: data.image_utama +'?random_number='+ new Date().getTime() }}
                    featured
                    onPress={()=>{
                        this.props.navigation.navigate('Gallery', {
                            images:this.state.image,
                            name:data.nama
                        })
                    }}
                    >
                    </Tile>                    
                    <Button buttonStyle={[styles.button, {marginTop:20}]} iconRight icon={{name: 'image'}} 
                        onPress={()=>{
                            this.props.navigation.navigate('Gallery', {
                                images:this.state.image,
                                name:data.nama
                            })
                        }}
                    title='Buka Foto Tahanan' />

                    <List>
                        <ListItem
                            title="Nomor Penahanan"
                            subtitle={data.nomor_penahanan}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron                         
                        />   
                        <ListItem
                            title="Tanggal Ditahan"
                            subtitle={this.ambilTanggal(data.tanggal_masuk)}
                            subtitleStyle={styles.listItemSubtitle}
                            rightIcon={ <Badge lamaDitahan={`${data.lama_ditahanan}`} dilimpahkan={data.tanggal_dilimpahkan} />}
                        />   
                        <ListItem
                            title="Tanggal Dilimpahkan"
                            subtitle={ this.ambilTanggal(data.tanggal_dilimpahkan) }
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />                        
                    </List>

                    <List>
                        <ListItem
                            title="Nama Penyidik / SAT"
                            subtitle={this.capitalizeFirstLetter(data.nama_penyidik_sat)}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Nama"
                            subtitle={this.capitalizeFirstLetter(data.nama)}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Kelamin"
                            subtitle={this.capitalizeFirstLetter(data.jenis_kelamin)}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Tahun"
                            subtitle={data.tahun}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Alamat"
                            subtitle={this.capitalizeFirstLetter(data.alamat)}
                            subtitleStyle={styles.listItemSubtitle}
                            subtitleNumberOfLines={7}                            
                            hideChevron
                        />
                        <ListItem
                            title="Pasal"
                            subtitle={data.pasal_dilangar}
                            subtitleStyle={styles.listItemSubtitle}
                            subtitleNumberOfLines={5}
                            hideChevron
                        />
                    </List>

                    <List>
                        <ListItem
                            title="Negara"
                            subtitle={this.capitalizeFirstLetter(data.kewarganegaraan)}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="TTL"
                            subtitle={data.ttl}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Agama"
                            subtitle={this.capitalizeFirstLetter(data.agama)}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Pendidikan Terakhir"
                            subtitle={data.pendidikan_terakhir == '' ? '-' : data.pendidikan_terakhir}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="Pekerjaan"
                            subtitle={data.pekerjaan == '' ? '-' : data.pekerjaan}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                        <ListItem
                            title="NIK"
                            subTitle={data.nik == '' ? '-' : data.nik}
                            subtitleStyle={styles.listItemSubtitle}
                            hideChevron
                        />
                    </List>
                    <Text style={styles.keterangan}>
                        <Text style={styles.keteranganTitle}>Keterangan : {'\n'}</Text>
                        {this.capitalizeFirstLetter(data.ket)}
                    </Text>
                    <Text style={styles.keterangan}>
                        <Text style={styles.keteranganTitle}>Barang Bukti : {'\n'}</Text>
                        {this.capitalizeFirstLetter(data.barang_bukti)}
                    </Text>
                </ScrollView>
            );
        }
    }
}

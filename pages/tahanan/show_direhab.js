import React, { Component } from 'react';
import styles from '../stylesheet';
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { List, Tile, ListItem, Button } from "react-native-elements";

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

    makeRemoteRequest(){
        URL = `http://crimesocial.web.id/api/tahanan/direhab/${this.props.navigation.state.params.id_tahanan}`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_tahanan");

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
                <View style = {styles.withNavbar}>
                    <ActivityIndicator animating = {this.state.loading} size = "large" />
                </View>
            );

        }else{
            const data = this.state.data;
            return (
                <ScrollView style={[styles.withNavbar,styles.brown]}>
                    <Button buttonStyle={styles.button} iconRight icon={{name: 'image'}} 
                        onPress={()=>{
                            this.props.navigation.navigate('Gallery', {
                                images:this.state.image,
                                name:data.nama
                            })
                        }}
                    title='Buka Foto Tahanan' />

                    <List>
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
                            hideChevron
                        />
                        <ListItem
                            title="Pasal"
                            subtitle={data.pasal_dilangar}
                            subtitleStyle={styles.listItemSubtitle}
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
                </ScrollView>
            );
        }
    }
}

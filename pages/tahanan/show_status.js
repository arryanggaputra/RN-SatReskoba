import React, { Component } from 'react';
import styles from '../stylesheet';
import { Text, View, ScrollView, ActivityIndicator, } from 'react-native';
import { Card } from "react-native-elements";

export default class ShowStatus extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: null,
            loading:true
        };
    }


    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest(){
        URL = `http://crimesocial.web.id/api/status/${this.props.navigation.state.params.id_status}`;
        var myHeaders = new Headers();
        myHeaders.append("token", "ambil_data_tahanan");

        fetch(URL, {
            headers: myHeaders,
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res,
                loading:false,
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

        } else{
            const data = this.state.data;
            return (
                <ScrollView style={[styles.withNavbar,styles.brown, styles.container]}>
                    <Card
                    title='Bot Narkoba'>
                        <Text style={{marginBottom: 10}}>
                            {this.state.data.body}
                        </Text> 
                    </Card>           
                </ScrollView>
            );
        }
    }
}

import React from 'react';
import styles from '../stylesheet';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation'


const background = require("./login1_bg.png");

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
        
    render() {

        const backAction = NavigationActions.back()
        return (
            <View style={styles.container} >
                <Image source={background} style={styles.background} resizeMode="cover">
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Silahkan hubungi Administrator untuk mengubah E-mail & Password</Text>                        
                        <Text style={styles.subtitle} onPress={()=>{this.props.navigation.dispatch(backAction)}}>Kembali</Text>
                    </View>                   
                </Image>
            </View>
        );
    }
}

import React, { Component } from 'react';
import styles from '../stylesheet';
import { Text, View, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TabNavigator, TabBarBottom} from 'react-navigation';
import { enhance } from 'react-navigation-addons';
import { Button } from 'react-native-elements';

import Location from './location'
import ListUser from './list_users'

export default class ShowStatus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page:0
        }
    }
    
    
    render() {
        return (
            <View style={[styles.withNavbar,styles.brown, styles.container]}>              
                <Tabs/>
            </View>
        );
    }
}

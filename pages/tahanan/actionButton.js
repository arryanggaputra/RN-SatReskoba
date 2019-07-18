import React, { Component } from 'react';
import styles from '../stylesheet';

import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';

export default class TahananShow extends Component {
    constructor() {
        super();
    }    
    
    render(){
        return (

            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item hideShadow={true} buttonColor='#333' onPress={() => {this.props.navigation.navigate('TahananList')} } >
                    <Icon name="md-people" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item hideShadow={true} buttonColor='#c00'  onPress={() => {this.props.navigation.navigate('Logout')} }>
                    <Icon name="md-log-out" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        )

    }


}

import React, { Component } from 'react';
import styles from '../stylesheet';

import { Badge } from "react-native-elements";
import {Text} from "react-native";

export default class BadgeTahanan extends Component {
    constructor() {
        super();
    }    
    
    render(){

        var bgColor;
        if(this.props.dilimpahkan == null) {
            bgColor = (this.props.lamaDitahan >= 20 ) ? (this.props.lamaDitahan >=61) ? (this.props.lamaDitahan >= 81) ? 'red' :'yellow' :'green' : '#eee';
        } else {
            bgColor = 'blue';
        }

        return (
            <Badge containerStyle={{
                    backgroundColor: bgColor,
                    borderRadius:3,}}>
                {this.props.dilimpahkan == null &&
                    <Text style={{fontWeight:'bold', color: (this.props.lamaDitahan >= 20 ) ? (this.props.lamaDitahan >=61) ? (this.props.lamaDitahan >= 81) ? 'white' :'#333' :'white' : '#333'}}>{this.props.lamaDitahan}</Text>                    
                }
                
                {this.props.dilimpahkan == null &&                
                    <Text style={{fontSize:10, color: (this.props.lamaDitahan >= 20 ) ? (this.props.lamaDitahan >=61) ? (this.props.lamaDitahan >= 81) ? 'white' :'#333' :'white' : '#333'}}>Hari</Text>
                }
                {this.props.dilimpahkan &&                
                    <Text style={{fontSize:10, color:'white'}}>Dilimpahkan</Text>   
                }
                
            </Badge>
        )

    }


}

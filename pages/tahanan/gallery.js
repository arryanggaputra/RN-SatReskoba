import React, { Component } from 'react';
import styles from '../stylesheet';
import { StatusBar } from 'react-native';

import Gallery from 'react-native-image-gallery';

export default class GalleryImage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Foto : ${navigation.state.params.name}`,
        headerStyle: {
            backgroundColor: 'black',
            elevation: null
        },
        headerTintColor: "white",
    });
        
    
    constructor() {
        super();
    }    

    componentWillMount() {
        StatusBar.setHidden( true, true);
    }    

    componentWillUnmount() {
        StatusBar.setHidden( false, true);
    }    
    
    
    render(){
        return (
            <Gallery
                style={{flex: 1, backgroundColor: 'black'}}
                images={this.props.navigation.state.params.images}
            />
        )

    }


}

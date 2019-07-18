import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect, Provider } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { AsyncStorage } from 'react-native';

class MainApplication extends React.Component {

    render(){
        AsyncStorage.removeItem('@satReskoba:tokenData', ()=>{
            AsyncStorage.removeItem('@satReskoba:detailUser', ()=>{
                this.props.onLogout();
            })             
        })
        return(
            <Spinner visible={true} overlayColor='#fff' color="black" textContent={"Loading..."} textStyle={{color: '#000'}} />
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(MainApplication);
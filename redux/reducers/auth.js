const defaultState = {
    isLoggedIn: false,
    email: '',
    is_master:0,
    password: ''
};
import {AsyncStorage} from 'react-native';

export default function reducer(state = defaultState, action) {

    
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                email: action.email,
                is_master: action.is_master,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                email: '',
                is_master: 0,
                password: ''
            });
        default:
            return state;
    }
}
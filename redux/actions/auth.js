export const login = (email, is_master, password) => {
    return {
        type: 'LOGIN',
        email: email,
        is_master: is_master,
        password: password
    };
};
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
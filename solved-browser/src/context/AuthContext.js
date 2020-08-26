import React, { createContext, useState } from 'react';
import {useHistory} from 'react-router-dom';

const AuthContext = createContext();
const {Provider} = AuthContext;

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const userInfo =  localStorage.getItem('userInfo');
    const message = localStorage.getItem('message')
    const [authState,setAuthState] = useState({
    token,
    userInfo: userInfo ? JSON.parse(userInfo): {},
    message,
    })


    const setAuthInfo = ({token, data, message}) => {
        console.log(message,data)
        localStorage.setItem('token',token)
        localStorage.setItem('userInfo',
        JSON.stringify(data))
        localStorage.setItem('message',message)
        setAuthState({
            token,
            userInfo,
            message
        });
    };

const logOut = () =>{
localStorage.removeItem('token');
localStorage.removeItem('message');
localStorage.removeItem('userInfo');
history.push('/login');
}

return(
    <Provider value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        logOut 
    }}>
{children}
    </Provider>
)

}

export {AuthContext,AuthProvider}
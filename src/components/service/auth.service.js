import jwt_decode from "jwt-decode";
import xhrService from "./xhr.service";

const doAuth = async (email, password) => {
    let response = await xhrService.post('http://localhost:3001/api/auth', {
                email,
                password,
     });

     console.log(response);
     localStorage.setItem('token', response.headers['x-auth-header']);
     //xhrService.setToken(response.headers['x-auth-header']);
     return response;
}

const isLoggedIn = () => {
    const data = localStorage.getItem('token');
    if(!data) {
        return false;
    }
    return data;
}

const getToken = () => {
    console.log('Returning token', localStorage.getItem('token'))
   return localStorage.getItem('token');
}

const isAdmin = () => {
    try {
        const data = jwt_decode(localStorage.getItem('token'));
        return data.isAdmin;
    } catch(Ex) {
        return false;
    }
}

const getUser = () => {
    try {
        const data = jwt_decode(localStorage.getItem('token'));
        return data;
    } catch(Ex) {
        return {};
    }
}

const doLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
}

export default {
    doAuth,
    isLoggedIn,
    isAdmin,
    doLogout,
    getToken,
    getUser
}
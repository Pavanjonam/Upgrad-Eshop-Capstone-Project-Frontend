import axios from 'axios';
import { toast } from 'react-toastify';

// const setToken = (token) => {
//     axios.defaults.headers.common['x-auth-header'] = token;
// }

// axios.interceptors.response.use(null, function(ex) {
//     toast.error(ex.message);

//     return Promise.reject(ex);
// })

export default {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
    //setToken: setToken
}
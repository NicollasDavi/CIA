import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://15.228.38.79/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(async config => {
    const token = await localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;

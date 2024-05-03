import axios from 'axios';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : "";
console.log(token)
const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export default instance;

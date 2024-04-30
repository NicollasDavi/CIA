import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
});

export default instance;

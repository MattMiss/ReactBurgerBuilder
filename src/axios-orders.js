import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-75b27.firebaseio.com/'
});

export default instance;
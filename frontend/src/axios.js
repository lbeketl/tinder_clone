import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderclone46285.herokuapp.com'
});

export default instance;
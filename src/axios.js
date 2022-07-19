import axios from "axios";


// для того, чтобы axios сам докручивал начало ссылки,
// когда мы вводим, например,
// axios.get('/posts')

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})

export default instance;
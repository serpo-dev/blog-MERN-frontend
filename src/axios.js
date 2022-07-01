import axios from "axios";


// для того, чтобы axios сам докручивал начало ссылки,
// когда мы вводим, например,
// axios.get('/posts')

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

export default instance;
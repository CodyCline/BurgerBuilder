import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://burgerbuilder-29d42.firebaseio.com/'
})

export default instance;
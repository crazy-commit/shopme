import axios from "axios";

const port = axios.create({
    baseURL:'/api',
    timeout:10000
})

export default port
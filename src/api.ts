import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Access-Control-Origin': '*',
        'ContentType': 'applicaton/json',
        'Acess-Control-Allow-Origin': '*'
    }
})

export default api;
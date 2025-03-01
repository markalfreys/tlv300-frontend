import axios from "axios";

const BASE_URL =  import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})
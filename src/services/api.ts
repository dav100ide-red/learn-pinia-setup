import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: import.meta.env.COUNTER_ENDPOINT,
});

export default axiosInstance;

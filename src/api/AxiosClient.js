import axios from 'axios';
import queryString from 'query-string'
const axiosClient = axios.create(
    {
        baseURL: 'https://gorest.co.in', 
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: param => queryString.stringify(param),
    }
);

axiosClient.interceptors.request.use(async (config) => {
    return config;
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
},
    (error) => {
        throw error;
    }
);

export default axiosClient;

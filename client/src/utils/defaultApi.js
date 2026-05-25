
import axios from 'axios'

/**
 * create API service with the given URL
 */

export const defaultApi = axios.create({baseURL: 'http://localhost:3000'});

/**
 * middleware that runs before request to the backend service
 * its task is to attach auth header to every request
 */

defaultApi.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

/**
 * middleware that checks the request before resolving the promise
 */

defaultApi.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401){
            if(typeof window !== 'undefined'){
                localStorage.removeItem('token')
                window.location.href = '/signin';
            }
        }
        return Promise.reject(error);
    }
)
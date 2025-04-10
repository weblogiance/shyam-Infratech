import axios from 'axios';      

const axiosInstance = axios.create({});

export const apiConnection =  (method,url,bodydata,header,params) =>{
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodydata ? bodydata : null,
        headers: header ? header : null,
        params: params ? params : null,
    })
}
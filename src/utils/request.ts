/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-10-09 23:10:14
 * @LastEditTime: 2022-10-14 23:04:00
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
    // baseURL: 'https://shop.fed.lagounews.com/api/'
    baseURL: import.meta.env.VITE_APP_TITLE
})

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then( res => res.data.data as T)
}
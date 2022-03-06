import {  AxiosError, AxiosResponse } from 'axios'
import Request from "./request/index";
import { BASE_URL, TIMEOUT } from './config';
import { RequestConfig } from './request/type';
import { message as Message } from 'antd';

export default new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  interceptors: {
    requestInterceptor: (config: RequestConfig) => checkContentType(config),
    requestInterceptorCatch: (error) => Promise.reject(error),
    responseInterceptor: (res: AxiosResponse) => checkCode(res),
    responseInterceptorCatch: (error) => checkStatus(error)
  }
});

export const checkContentType = (config: RequestConfig) => {
  return config
}

export const checkCode = (res: AxiosResponse) => {
  if (res.status === 200) {
    if (res.data && res.data?.code) {
      console.log(res.data);
      return res.data
    }
    return Promise.reject(res)
  }
  handleCode(res?.data)
  return Promise.reject(res)
}

export const checkStatus = (error: AxiosError) => {
  let { message } = error;
  if (message === 'Network Error') {
    message = '后端接口连接异常';
  }
  if (message.includes('timeout')) {
    message = '后端接口请求超时';
  }
  if (message.includes('Request failed with status code')) {
    const code = message.substr(message.length - 3);
    message = `后端接口${code}异常`;
  }
  Message.error(message);
  return Promise.reject(error);
};
export const handleCode = (data: any) => {
  console.log('------');
  
  const { code, msg } = data;
  if (code !== 200) {
    Message.error(data?.msg)
  }
}
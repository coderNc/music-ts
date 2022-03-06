import axios, { AxiosInstance } from "axios";
import { RequestConfig, RequestInterceptors, IResponse } from "./type";

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  showLoading?: boolean;
  loading?: any;
  constructor(config: RequestConfig) {
    // 对实例和拦截器进行初始化
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? false;
    // 注册实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
        }

        return config;
      },
      (err) => {
        return err;
      }
    );
    // this.instance.interceptors.response.use(
    //   (res) => {
    //     const { data } = res;
    //     return data;
    //   },
    //   (err) => {
    //     return err.response;
    //   }
    // );
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 自己拦截 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}
export default Request;

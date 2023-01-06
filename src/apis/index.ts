import type { AxiosRequestConfig } from 'axios';
import axios from './axios';

export interface CustomRequestConfig {
  /**
   * 请求方法
   * @default 'get'
   * @type {('post' | 'get')}
   * @memberof CustomRequestConfig
   */
  method?: 'post' | 'get';
  /**
   * 请求地址
   * @type {string}
   * @memberof CustomRequestConfig
   */
  url: string;
  /**
   * 错误时是否隐藏toast提示
   * @type {boolean}
   * @memberof CustomRequestConfig
   */
  hideErrorToast?: boolean;
  /**
   * 请求时是否隐藏Loading提示
   * @type {boolean}
   * @memberof CustomRequestConfig
   */
  hideLoading?: boolean;
  /**
   * 请求数据
   * @type {Record<string, any>}
   * @memberof CustomRequestConfig
   */
  data?: Record<string, any>;
}
export function request<T>(config: CustomRequestConfig) {
  const data: AxiosRequestConfig = { ...config };
  if (data.method === 'get') {
    data.params = data.data;
    delete data.data;
  }
  return new Promise<T>((resolve, reject) => {
    axios
      .request<T>(data)
      .then((res) => resolve(res as T))
      .catch((err) => reject(err));
  });
}

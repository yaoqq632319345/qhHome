import Axios, {
  type AxiosResponse,
  type AxiosInstance,
  type AxiosRequestConfig
} from 'axios';
import type { CustomRequestConfig } from './index';

/** 全局接口返回格式 */
interface CustomRes {
  /**
   * 接口code
   * @type {(
   *     | 0 // 前端错误
   *     | 9999 // 服务端错误
   *     | 200 // 请求成功
   * )}
   * @memberof CustomRes
   */
  code: 0 | 9999 | 200;
  message: string;
  result?: any;
  [k: string]: any;
}

/** axios请求baseUrl */
const baseURL = import.meta.env.VITE_REQUEST_BASE_URL;
const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true
});

axios.interceptors.request.use(
  (config) => config,
  () => Promise.reject({ code: 0, message: '请求出错' })
);

axios.interceptors.response.use(
  (response) => {
    const { data } = response as AxiosResponse<CustomRes>;
    if (data.code === 9999) {
      // 200 OK 但是code不对，属于业务错误
      return Promise.reject(data);
    }
    // 正常返回
    return data.result;
  },
  (error) => {
    const { response } = error;
    const config = response.config as CustomRequestConfig & AxiosRequestConfig;
    let res: CustomRes;
    if (response.data) res = response.data; // 返回出错使用返回结果
    else res = { code: 0, message: '网络错误' }; // 前端请求出错
    if (!config.hideErrorToast) {
      // TODO tosat 提示
    }
    return Promise.reject(res);
  }
);

export default axios;

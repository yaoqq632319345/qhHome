/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 项目title
   * @type {string}
   * @memberof ImportMetaEnv
   */
  readonly VITE_APP_TITLE: string;
  /**
   * axios 请求baseUrl
   * @type {string}
   * @memberof ImportMetaEnv
   */
  readonly VITE_REQUEST_BASE_URL: string;
}

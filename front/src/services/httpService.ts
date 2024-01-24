import axios from "axios";
import configFile from "../config";
import authLocalStorageService from "../localStorage/authLocalStorage";
import authService from "./authService";

const http = axios.create({ baseURL: configFile.apiUrl });

http.interceptors.request.use(
  async function (config: any) {
    const expiresDate = authLocalStorageService.getTokenExpiresIn();
    const refreshToken = authLocalStorageService.getRefreshToken();
    if (refreshToken && expiresDate && +expiresDate < Date.now()) {
      const data = await authService.refresh();
      authLocalStorageService.setData({ ...data });
    }

    const accessToken = authLocalStorageService.getAccessToken();
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    res.data = { content: res.data };
    return res;
  },
  function (error) {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErrors) {
      console.log("Что то не так:", error);
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
};
export default httpService;

import { LogIn, SignUp } from "../types";
import httpService from "./httpService";

const authEndPoint = "auth/";
const TOKEN_KEY = "jwt-access-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USER_ID = "user-id";

const authService = {
  logIn: async (payload: LogIn) => {
    const { data } = await httpService.post(authEndPoint + "login", payload);
    return data;
  },
  signUp: async (payload: SignUp) => {
    const { data } = await httpService.post(authEndPoint + "registration", payload);
    return data;
  },
  saveTokensLocalStorage: (payload: any) => {
    const { accessToken } = payload;
    localStorage.setItem(TOKEN_KEY, accessToken);
  }
};

export default authService;

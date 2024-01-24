import authLocalStorageService from "../localStorage/authLocalStorage";
import { LogIn, SignUp } from "../types";
import httpService from "./httpService";

const authEndPoint = "auth/";

const authService = {
  logIn: async (payload: LogIn) => {
    const { data } = await httpService.post(authEndPoint + "signInWithPassword", payload);
    return data;
  },
  signUp: async (payload: SignUp) => {
    const { data } = await httpService.post(authEndPoint + "signUp", payload);
    return data;
  },
  refresh: async () => {
    const { data } = await httpService.post("token", {
      grant_type: "refresh_token",
      refresh_token: authLocalStorageService.getRefreshToken()
    });
    return data;
  }
};

export default authService;

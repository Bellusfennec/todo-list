const TOKEN_KEY = "jwt-access-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USER_ID = "user-id";

interface IToken {
  accessToken: string;
}

export function setData({ accessToken }: IToken) {
  // const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(TOKEN_KEY, accessToken);
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteData() {
  if (getAccessToken()) localStorage.removeItem(TOKEN_KEY);
}

const authLocalStorageService = {
  setData,
  getAccessToken,
  deleteData
};
export default authLocalStorageService;

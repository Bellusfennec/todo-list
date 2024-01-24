import { AuthData } from "../types";

const TOKEN_KEY = "jwt-access-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USER_ID = "user-id";

function setData(payload: AuthData) {
  const { accessToken, expiresIn, refreshToken, userId } = payload;
  const expiresDate = (new Date().getTime() + expiresIn * 1000).toString();
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
  localStorage.setItem(USER_ID, userId);
}

function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}
function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}
function getTokenExpiresIn() {
  return localStorage.getItem(EXPIRES_KEY);
}
function getUserId() {
  return localStorage.getItem(USER_ID);
}

function deleteData() {
  if (getAccessToken()) localStorage.removeItem(TOKEN_KEY);
  if (getRefreshToken()) localStorage.removeItem(REFRESH_KEY);
  if (getTokenExpiresIn()) localStorage.removeItem(EXPIRES_KEY);
  if (getUserId()) localStorage.removeItem(USER_ID);
}

const authLocalStorageService = {
  setData,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresIn,
  getUserId,
  deleteData
};
export default authLocalStorageService;

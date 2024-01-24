import React, { useContext, useState } from "react";
import authLocalStorageService from "../localStorage/authLocalStorage";
import authService from "../services/authService";
import { LogIn, SignUp } from "../types";

const AuthContext = React.createContext<any>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [isAuth, setAuth] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  async function signUp(payload: SignUp) {
    setLoading(true);
    try {
      const { content } = await authService.signUp(payload);
      authLocalStorageService.setData(content);
      setAuth(true);
    } catch (error: any) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }

  async function logIn(payload: LogIn) {
    setLoading(true);
    try {
      const { content } = await authService.logIn(payload);
      authLocalStorageService.setData(content);
      setAuth(true);
    } catch (error: any) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }

  async function logOut() {
    setLoading(true);
    try {
      // const { content } = await authService.logIn(payload);
      authLocalStorageService.deleteData();
      setAuth(false);
    } catch (error: any) {
      // const { code, message } = error.response.data.error;
      // if (code === 400) {
      //   const errorMessage = generateAuthError(message);
      //   setError(errorMessage);
      // }
    } finally {
      setLoading(false);
    }
  }

  function syncAuth() {
    const auth = authLocalStorageService.getAccessToken();
    setAuth(!!auth);
  }

  function generateAuthError(message: string) {
    switch (message) {
      case "EMAIL_NOT_FOUND": {
        return {
          email: "Некорректная электронная почта или пароль",
          password: "Некорректная электронная почта или пароль"
        };
      }
      case "INVALID_PASSWORD": {
        return {
          email: "Некорректная электронная почта или пароль",
          password: "Некорректная электронная почта или пароль"
        };
      }
      case "EMAIL_EXISTS": {
        return {
          email: "Пользователь с такой электронной почтой уже существует"
        };
      }
      case "WEAK_PASSWORD : Password should be at least 6 characters": {
        return {
          password: "Минимальная длинна 6 символов"
        };
      }
      case "INVALID_EMAIL": {
        return {
          email: "Проверьте корректность электронной почты"
        };
      }
      default:
        return {
          email: "Слишком много попыток входа",
          password: "Слишком много попыток входа"
        };
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        error,
        isLoading,
        signUp,
        logIn,
        logOut,
        syncAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

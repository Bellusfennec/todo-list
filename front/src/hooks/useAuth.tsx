import React, { useContext, useEffect, useState } from "react";
import { LogIn, ObjectData, SignUp } from "../types";
import { getRandomNumberId } from "../utils/randomId";
import authService from "../services/authService";
import authLocalStorageService from "../localStorage/authLocalStorage";

const AuthContext = React.createContext<any>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>({});
  const [isLoading, setLoading] = useState(true);

  async function signUp(payload: SignUp) {
    const { content } = await authService.signUp(payload);
    authLocalStorageService.setData(content);
  }

  async function logIn(payload: LogIn) {
    const { content } = await authService.logIn(payload);
    authLocalStorageService.setData(content);
  }

  function deleteAuthById(id: number) {
    // const newData = authList.filter((item: any) => item.id !== id);
    // setAuthList(newData);
  }

  function createAuth(newItem: ObjectData) {
    // const newData = [...authList, { id: getRandomNumberId(), done: false, index: 0, ...newItem }];
    // setAuthList(newData);
  }

  useEffect(() => {
    // setAuthList(mockData);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        isLoading,
        signUp,
        logIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

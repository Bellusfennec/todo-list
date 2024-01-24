import React, { useContext, useEffect, useState } from "react";
import userService from "../services/userService";
import { UserUpdate } from "../types";
import authLocalStorageService from "../localStorage/authLocalStorage";

const UserContext = React.createContext<any>(undefined);

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  function update(payload: UserUpdate) {
    const newData = { ...user, ...payload };
    setUser(newData);
  }

  async function updateUser(payload: UserUpdate) {
    setLoading(true);
    try {
      const { content } = await userService.update(payload);
      update(content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserById(id: number) {
    setLoading(true);
    try {
      const { content } = await userService.getById(id);
      setUser(content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function syncUser() {
    const userId = authLocalStorageService.getUserId();
    setUser({ userId });
  }

  useEffect(() => {
    if (user.userId) getUserById(user.userId);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        error,
        updateUser,
        getUserById,
        syncUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

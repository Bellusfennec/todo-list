/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";
import { useTodo } from "../hooks/useTodo";

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = (props: AppLoaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { children } = props;
  const { isAuth } = useAuth();
  const { user, syncUserLocalStorage } = useUser();
  const { getTodoList } = useTodo();

  useEffect(() => {
    const isLocationAuthorization = location?.pathname === "/login" || location?.pathname === "/registration";
    if (!isLocationAuthorization && !isAuth) navigate("/login");
    else if (isLocationAuthorization && isAuth) {
      syncUserLocalStorage();
      navigate("/");
    }

    if (isAuth && user) {
      getTodoList();
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default AppLoader;

import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import LoginPage from "../pages/auth/login";
import ErrorPage from "../pages/error";
import RegistrationPage from "../pages/auth/registration";
import LogoutPage from "../pages/auth/logout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="logout" element={<LogoutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

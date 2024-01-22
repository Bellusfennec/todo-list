import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import LoginPage from "../pages/auth/login";
import ErrorPage from "../pages/error";
import RegistrationPage from "../pages/auth/registration";
// import ErrorPage from "./pages/error";
// import PassportPage from "./pages/passport";
// import ProductPage from "./pages/product";
// import PassportLoggedOutPage from "./pages/logout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      {/* <Route path="logout" element={<PassportLoggedOutPage />} /> */}
      {/* <Route path="product/:page?/:productId?" element={<ProductPage />} />
       <Route path="basket/:page?" element={<BasketPage />} />
       <Route path="favorite" element={<FavoritePage />} />
       <Route path="admin/:page?/:action?/:id?" element={<AdminPage />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

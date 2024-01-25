import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";

const UserNav = () => {
  const { isAuth } = useAuth();
  const { user } = useUser();

  if (!isAuth) {
    return (
      <div>
        <Link to="/registration">Регистрация</Link> <Link to="/login">Войти</Link>
      </div>
    );
  }
  return (
    <div>
      <p>{user?.email}</p>
      <div>
        <Link to="/logout">Выйти</Link>
      </div>
    </div>
  );
};

export default UserNav;

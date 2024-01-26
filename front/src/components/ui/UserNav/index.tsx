import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useUser } from "../../../hooks/useUser";
import { FaArrowRightFromBracket, FaRegCircleUser } from "react-icons/fa6";

const UserNav = () => {
  const { isAuth } = useAuth();
  const { user } = useUser();
  console.log(user);

  if (!isAuth) {
    return (
      <div>
        <Link to="/registration">Регистрация</Link> <Link to="/login">Войти</Link>
      </div>
    );
  }
  return (
    <div className="relative group/navbar flex flex-col items-end">
      <div className="flex gap-1 items-center justify-end">
        <div className="rounded-[50%] overflow-hidden w-8 h-8 relative shadow-md">
          <img
            src={user?.image}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8"
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute z-10 top-0 right-0 hidden group-hover/navbar:block opacity-0 group-hover/navbar:animate-appearance">
          <div className="mt-1 shadow-md min-w-[160px] bg-white text-gray-600 rounded-lg overflow-hidden ">
            <Link to="/profile" className="flex gap-2 items-center px-5 py-1 bg-white hover:bg-slate-200 w-full">
              <FaRegCircleUser />
              <span>Профиль</span>
            </Link>
            <Link to="/logout" className="flex gap-2 items-center px-5 py-1 bg-white hover:bg-slate-200 w-full">
              <FaArrowRightFromBracket />
              <span>Выйти</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;

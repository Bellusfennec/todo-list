import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import Copyright from "../components/ui/Copyright";
import MainContainer from "../components/common/container/MainContainer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className="animate-appearance flex flex-col min-h-screen justify-between">
      <header className="py-5 border-b border-gray-100">
        <MainContainer className="flex justify-between items-center">
          <Link to="/">
            <Logo className="text-2xl font-bold" />
          </Link>
          <div>
            <Link to="/registration">Регистрация</Link> <Link to="/login">Войти</Link>
          </div>
        </MainContainer>
      </header>
      <main className="grow">{children}</main>
      <footer className="bg-gray-50 py-5 border-t border-gray-100">
        <MainContainer className="flex justify-center">
          <Copyright />
        </MainContainer>
      </footer>
    </div>
  );
};

export default MainLayout;

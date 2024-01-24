import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import Copyright from "../components/ui/Copyright";
import MainContainer from "../components/common/container/MainContainer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <div className="animate-appearance flex flex-col min-h-screen justify-between">
      <header className="flex justify-center py-5 bg-cyan-800 text-gray-100">
        <Link to="/">
          <Logo className="text-2xl font-bold" />
        </Link>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-gray-100 py-5 border-t border-gray-100">
        <MainContainer className="flex justify-center">
          <Copyright />
        </MainContainer>
      </footer>
    </div>
  );
};

export default AuthLayout;

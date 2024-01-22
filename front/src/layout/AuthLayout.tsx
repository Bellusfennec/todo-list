import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import Copyright from "../components/ui/Copyright";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <div className="animate-appearance flex flex-col min-h-screen justify-between">
      <header className="flex justify-center">
        <Link to="/">
          <Logo className="text-2xl font-bold" />
        </Link>
      </header>
      <main>{children}</main>
      <footer className="flex justify-center">
        <Copyright />
      </footer>
    </div>
  );
};

export default AuthLayout;

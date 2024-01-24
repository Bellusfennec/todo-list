import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import Copyright from "../components/ui/Copyright";
import MainContainer from "../components/common/container/MainContainer";
import UserNav from "../components/ui/UserNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className="animate-appearance flex flex-col min-h-screen justify-between">
      <header className="py-5 bg-cyan-800 text-gray-100">
        <MainContainer className="flex justify-between items-center">
          <Link to="/">
            <Logo className="text-2xl font-bold" />
          </Link>
          <UserNav />
        </MainContainer>
      </header>
      <main className="grow">{children}</main>
      <footer className="bg-gray-800 text-gray-100 py-5 border-t border-gray-100">
        <MainContainer className="flex justify-center">
          <Copyright />
        </MainContainer>
      </footer>
    </div>
  );
};

export default MainLayout;

import AuthProvider from "../hooks/useAuth";
import TodoProvider from "../hooks/useTodo";

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = (props: AppLoaderProps) => {
  const { children } = props;
  return (
    <AuthProvider>
      <TodoProvider>{children}</TodoProvider>
    </AuthProvider>
  );
};

export default AppLoader;

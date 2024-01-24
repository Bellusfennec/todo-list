import AuthProvider from "../hooks/useAuth";
import TodoProvider from "../hooks/useTodo";
import UserProvider from "../hooks/useUser";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return (
    <AuthProvider>
      <UserProvider>
        <TodoProvider>{children}</TodoProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default AppProvider;

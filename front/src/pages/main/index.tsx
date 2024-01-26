import MainContainer from "../../components/common/container/MainContainer";
import CreateTodo from "../../components/ui/CreateTodo";
import TodoList from "../../components/ui/TodoList";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import MainLayout from "../../layout/MainLayout";

const MainPage = () => {
  const { isAuth } = useAuth();
  const { user } = useUser();

  if (!isAuth && !user._id) {
    return (
      <MainLayout>
        <MainContainer>
          <div className="flex my-10 shadow-md py-10 px-5 rounded-md border justify-center">
            Список дел доступно только для зарегистрированным пользователям.
          </div>
        </MainContainer>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <MainContainer className="flex flex-col gap-10 my-10">
        <CreateTodo />
        <TodoList />
      </MainContainer>
    </MainLayout>
  );
};

export default MainPage;

import MainContainer from "../../components/common/container/MainContainer";
import CreateTodo from "../../components/ui/CreateTodo";
import TodoList from "../../components/ui/TodoList";
import MainLayout from "../../layout/MainLayout";

const MainPage = () => {
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

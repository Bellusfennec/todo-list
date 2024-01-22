import MainContainer from "../../components/common/container/MainContainer";
import CreateTodo from "../../components/ui/CreateTodo";
import TodoList from "../../components/ui/TodoList";
import MainLayout from "../../layout/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <MainContainer>
        <div className="flex flex-col gap-10 my-10">
          <CreateTodo />
          <TodoList />
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default MainPage;

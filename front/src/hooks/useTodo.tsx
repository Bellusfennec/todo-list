import React, { useContext, useEffect, useState } from "react";
import { ObjectData } from "../types";
import { getRandomNumberId } from "../utils/randomId";
// import localStorageService from "../services/localStorage";

const mockData = [
  { id: 1, name: "Первое", done: true, index: 0 },
  { id: 2, name: "Второе", done: false, index: 0 },
  { id: 3, name: "Третье", done: false, index: 0 },
  { id: 4, name: "Четвертое", done: true, index: 0 },
  { id: 5, name: "Пятое", done: false, index: 0 }
];

const TodoContext = React.createContext<any>(undefined);

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  function updateTodo(updItem: any) {
    const newData = [...todoList];
    const index = newData.findIndex((item) => item.id === updItem.id);
    newData[index] = { ...newData[index], ...updItem };
    setTodoList(newData);
  }

  function getTodoById(id: number) {
    // if (getFavoriteById(id)) return;
    // const newTodo = todo ? [...todo, id] : [id];
    // localStorageService.setTodo(newTodo);
    // setTodo(newTodo);
  }

  function deleteTodoById(id: number) {
    const newData = todoList.filter((item: any) => item.id !== id);
    setTodoList(newData);
  }

  function createTodo(newItem: ObjectData) {
    const newData = [...todoList, { id: getRandomNumberId(), done: false, index: 0, ...newItem }];
    setTodoList(newData);
  }

  useEffect(() => {
    setTodoList(mockData);
    setLoading(false);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        isLoading,
        getTodoById,
        deleteTodoById,
        updateTodo,
        createTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

import React, { useContext, useState } from "react";
import todoService from "../services/todoService";
import { TodoCreate, TodoUpdate } from "../types";

const TodoContext = React.createContext<any>(undefined);

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  function create(payload: TodoCreate) {
    const newData = [...todoList, payload];
    setTodoList(newData);
  }
  function update(payload: TodoUpdate) {
    const newData = [...todoList];
    const index = newData.findIndex((item) => item._id === payload._id);
    newData[index] = { ...newData[index], ...payload };
    setTodoList(newData);
  }
  function remove(id: string) {
    const newData = todoList.filter((item: any) => item._id !== id);
    setTodoList(newData);
  }

  async function getTodoList() {
    setLoading(true);
    try {
      const { content } = await todoService.get();
      setTodoList(content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function createTodo(payload: TodoCreate) {
    setLoading(true);
    try {
      const { content } = await todoService.create(payload);
      create(content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  async function updateTodo(payload: TodoUpdate) {
    setLoading(true);
    try {
      const { content } = await todoService.update(payload);
      update(content);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  async function deleteTodo(id: string) {
    setLoading(true);
    try {
      await todoService.delete(id);
      remove(id);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        isLoading,
        error,
        deleteTodo,
        updateTodo,
        createTodo,
        getTodoList
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

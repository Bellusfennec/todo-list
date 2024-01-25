/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useClickOut from "../../../hooks/useClickOut";
import useForm from "../../../hooks/useForm";
import { useTodo } from "../../../hooks/useTodo";
import { ObjectData } from "../../../types";
import CheckboxField from "../../common/field/CheckboxField";
import TodoCard from "../TodoCard";
import UpdateTodo from "../UpdateTodo";

const initialData = {
  name: ""
};
const validConfig = {
  name: { isRequired: "" }
};

const TodoList = () => {
  const { todoList, updateTodo, deleteTodo } = useTodo();
  const [selectedId, setSelectedId] = useState<null | string>(null);
  // todoList.sort((a: any, b: any) => (a.вфе === b.done ? 0 : b.done ? -1 : 1));
  const sortedData = todoList.sort((a: any, b: any) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
  console.log(todoList, sortedData);

  const { form, setForm, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });
  const { noClose } = useClickOut({ isOpen: !!selectedId, onClickOut: () => setSelectedId(null) });

  function onSubmit(data: ObjectData) {
    if (data._id) {
      form.name.trim();
      updateTodo(form);
      setSelectedId(null);
    }
  }

  useEffect(() => {
    if (selectedId === null) {
      handlerSubmit();
    }
  }, [selectedId]);

  const handlerSelect = (id: string) => {
    const item = todoList.find((todo: any) => todo._id === id);
    setForm((state) => ({ ...state, ...item }));
    setSelectedId(id);
  };

  return (
    <div className={"flex flex-col border border-gray-100 rounded-xl shadow-lg overflow-hidden"}>
      {sortedData && sortedData.length === 0 && <p className="flex justify-center py-5">Записей не найдено.</p>}
      {sortedData.map((item: any) => (
        <div
          key={item._id}
          className={
            "group flex gap-3 p-3 rounded-xl hover:bg-gray-100 items-start" +
            (selectedId === item._id ? " bg-gray-100" : " animate-appearance") +
            ` ${noClose}`
          }
        >
          <CheckboxField
            name="done"
            value={item.done}
            onChange={({ name, value }) => updateTodo({ _id: item._id, [name]: value })}
            className="mt-[10px]"
          />
          {selectedId === item._id ? (
            <UpdateTodo data={form} className={noClose} onChange={handlerChange} />
          ) : (
            <TodoCard data={item} noClose={noClose} onDelete={deleteTodo} onSelect={handlerSelect} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;

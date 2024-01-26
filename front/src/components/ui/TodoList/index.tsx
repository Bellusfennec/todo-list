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
  const { todoList, updateTodo, deleteTodo, search } = useTodo();
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const searchFilteredData = todoList.filter((todo: any) => todo.name?.toLowerCase().includes(search.toLowerCase()));
  const sortedData = [...searchFilteredData].sort((a: any, b: any) => {
    const aa = +new Date(a.updatedAt).getTime();
    const bb = +new Date(b.updatedAt).getTime();
    return bb - aa;
  });
  const doneData = sortedData.filter((todo) => todo.done === true);
  const notDoneData = sortedData.filter((todo) => todo.done === false);
  const finalData = [...notDoneData, ...doneData];

  const { form, setForm, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });
  const { noClose } = useClickOut({ isOpen: !!selectedId, onClickOut: () => setSelectedId(null) });

  function onSubmit(data: ObjectData) {
    if (data?._id) {
      if (form?.name?.trim()) {
        form.name.trim();
        updateTodo(form);
        setSelectedId(null);
      }
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
    <div className={"flex flex-col border border-gray-100 rounded-xl shadow-md overflow-hidden"}>
      {finalData && finalData.length === 0 && <p className="flex justify-center py-5">Записей не найдено.</p>}
      {finalData.map((item: any) => (
        <div
          key={item._id}
          className={
            "group/todo flex gap-3 p-3 rounded-xl hover:bg-gray-100 items-start" +
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

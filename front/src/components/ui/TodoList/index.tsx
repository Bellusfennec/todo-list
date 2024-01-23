import { useState } from "react";
import useClickOut from "../../../hooks/useClickOut";
import { ObjectData } from "../../../types";
import UpdateTodo from "../UpdateTodo";
import CheckboxField from "../../common/field/CheckboxField";
import { useTodo } from "../../../hooks/useTodo";

const TodoList = () => {
  const { todoList, updateTodo, deleteTodoById } = useTodo();
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const { noClose } = useClickOut({ isOpen: !!selectedId, onClickOut: () => setSelectedId(null) });
  const sortedData = todoList.sort((a: any, b: any) => (a.done === b.done ? 0 : b.done ? -1 : 1));

  const handlerUpdate = (updItem: ObjectData) => {
    updateTodo(updItem);
    setSelectedId(null);
  };

  return (
    <div className={"flex flex-col"}>
      {sortedData.map((item: any) => (
        <div
          key={item.id}
          onClick={() => setSelectedId(item.id)}
          className={
            "group flex gap-3 p-3 rounded-xl hover:bg-gray-50" +
            (selectedId === item.id ? " bg-gray-50" : "") +
            ` ${noClose}`
          }
        >
          <CheckboxField
            name="done"
            value={item.done}
            onChange={({ name, value }) => handlerUpdate({ id: item.id, [name]: value })}
          />
          {selectedId === item.id ? (
            <UpdateTodo data={item} className={noClose} onChange={handlerUpdate} onDelete={deleteTodoById} />
          ) : (
            <p
              onClick={() => setSelectedId(item.id)}
              className={
                "w-full text-start py-[10px] px-[20px] group-hover:text-cyan-700 transition duration-200" +
                (item.done ? " text-gray-300" : "") +
                ` ${noClose}`
              }
            >
              {item.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;

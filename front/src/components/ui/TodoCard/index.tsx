import { FaRegTrashAlt } from "react-icons/fa";
import { ObjectData } from "../../../types";
import { FaPencil } from "react-icons/fa6";

interface TodoCardProps {
  data: ObjectData;
  noClose?: string;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

const TodoCard = (props: TodoCardProps) => {
  const { data, noClose, onDelete, onSelect } = props;
  // whitespace-pre-line
  return (
    <div className="flex justify-between items-start relative w-[calc(100%-35px)]">
      <p
        className={
          "py-[10px] px-[20px] break-words text-ellipsis whitespace-pre-line w-full" +
          (data.done ? " text-gray-300 line-through" : "") +
          (noClose ? ` ${noClose}` : "")
        }
      >
        {data.name}
      </p>

      {data.done ? (
        <button
          onClick={() => onDelete(data._id)}
          className="absolute top-0 -right-5 p-[10px] opacity-0 group-hover:animate-todo-pencel-appearance group/delete bg-[rgba(255,255,255,0.7)] shadow-sm rounded-full"
        >
          <FaRegTrashAlt className="w-5 h-5 text-red-600 group-hover/delete:text-red-800 transition duration-200" />
        </button>
      ) : (
        <button
          onClick={() => onSelect(data._id)}
          className={
            `absolute top-0 -right-5 p-[12px] opacity-0 group-hover:animate-todo-pencel-appearance group/pencel bg-[rgba(255,255,255,0.7)] shadow-sm rounded-full` +
            (noClose ? ` ${noClose}` : "")
          }
        >
          <FaPencil className="w-5 h-5 group-hover/pencel:text-cyan-800" />
        </button>
      )}
    </div>
  );
};

export default TodoCard;

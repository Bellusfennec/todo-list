/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import { ObjectData } from "../../../types";
import TextareaField from "../../common/field/TextareaField";

interface UpdateTodoProps {
  data: ObjectData;
  className?: string;
  onChange?: (item: ObjectData) => void;
  onDelete?: (id: number) => void;
}

const initialData = {
  name: ""
};
const validConfig = {
  name: { isRequired: "" }
};

const UpdateTodo = (props: UpdateTodoProps) => {
  const { data, className, onChange, onDelete } = props;
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {
    onChange?.(data);
  }

  useEffect(() => {
    if (data) setForm((state) => ({ ...state, ...data }));
  }, [data]);

  return (
    <div className={"flex gap-3 w-full" + (className ? ` ${className}` : "")}>
      <TextareaField name="name" value={form.name} onChange={handlerChange} />
      <div className="flex">
        <button onClick={handlerSubmit} className="p-[10px] group/update">
          <FaCheck className="w-6 h-6 text-green-600 group-hover/update:text-green-800 transition duration-200" />
        </button>
        <button onClick={() => onDelete?.(data.id)} className="p-[10px] group/delete">
          <FaRegTrashAlt className="w-6 h-6 text-red-600 group-hover/delete:text-red-800 transition duration-200" />
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;

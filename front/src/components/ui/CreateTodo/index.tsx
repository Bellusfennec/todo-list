import { FaPlus } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import { useTodo } from "../../../hooks/useTodo";
import { ObjectData } from "../../../types";
import TextField from "../../common/field/TextField";

const initialData = {
  name: ""
};
const validConfig = {
  name: { isRequired: "" }
};

const CreateTodo = () => {
  const { createTodo } = useTodo();
  const { form, error, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {
    createTodo(data);
  }
  return (
    <div className="flex justify-center">
      <TextField name="name" value={form.name} onChange={handlerChange} error={error.name} inputClass="w-96" />
      <button onClick={handlerSubmit} className="p-[10px] group">
        <FaPlus className="w-6 h-6 text-green-600 group-hover:text-green-800 transition duration-200" />
      </button>
    </div>
  );
};

export default CreateTodo;

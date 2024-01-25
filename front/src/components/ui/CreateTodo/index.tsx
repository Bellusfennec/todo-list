import { FaPlus } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import { useTodo } from "../../../hooks/useTodo";
import { ObjectData } from "../../../types";
import TextField from "../../common/field/TextField";
import Button from "../../common/button/Button";

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
    <div className="flex justify-center flex-col sm:flex-row gap-3">
      <TextField name="name" value={form.name} onChange={handlerChange} error={error.name} />
      <Button onClick={handlerSubmit} className="p-[10px] group flex gap-3 items-center w-full sm:w-auto">
        <FaPlus className="w-5 h-5 text-green-600 group-hover:text-green-800 transition duration-200" />
        <span>Добавить</span>
      </Button>
    </div>
  );
};

export default CreateTodo;

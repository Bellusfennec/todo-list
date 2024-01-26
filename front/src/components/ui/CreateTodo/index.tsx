import { FaPlus } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import { useTodo } from "../../../hooks/useTodo";
import { ObjectData } from "../../../types";
import Button from "../../common/button/Button";
import TextareaField from "../../common/field/TextareaField";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const initialData = {
  name: ""
};
const validConfig = {
  name: { isRequired: "" }
};

const CreateTodo = () => {
  const { createTodo, setSearch } = useTodo();
  const [isSearch, setIsSearch] = useState(false);
  const { form, error, isValid, handlerChange, handlerSubmit } = useForm({ initialData, validConfig, onSubmit });

  const handlerChangeMiddleware = ({ name, value }: any) => {
    if (isSearch) setSearch(value);
    handlerChange({ name, value });
  };

  function onSubmit(data: ObjectData) {
    createTodo(data);
  }
  return (
    <div className="flex justify-center flex-col sm:flex-row gap-3">
      <Button
        onClick={() => setIsSearch(!isSearch)}
        color={isSearch ? "base" : "transparent"}
        className="p-[10px] group flex gap-3 items-center w-full sm:w-auto"
      >
        <FaSearch className="w-6 h-6 group-hover:text-cyan-800 transition duration-200" />
      </Button>
      <TextareaField name="name" value={form.name} onChange={handlerChangeMiddleware} />

      <Button
        onClick={handlerSubmit}
        className="p-[10px] group flex gap-3 items-center w-full sm:w-auto"
        disabled={!isValid}
      >
        <FaPlus className="w-5 h-5 text-green-600 group-hover:text-green-800 transition duration-200" />
        <span>Добавить</span>
      </Button>
    </div>
  );
};

export default CreateTodo;

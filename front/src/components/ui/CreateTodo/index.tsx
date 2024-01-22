import useForm from "../../../hooks/useForm";
import { ObjectData } from "../../../types";
import Button from "../../common/button/Button";
import TextField from "../../common/field/TextField";

const data = {
  name: ""
};
const validConfig = {
  name: { isRequired: "" }
};

const CreateTodo = () => {
  const { form, error, handlerChange, handlerSubmit } = useForm({ data, validConfig, onSubmit });

  function onSubmit(data: ObjectData) {}
  return (
    <div className="flex gap-5 justify-center">
      <TextField name="name" value={form.name} onChange={handlerChange} error={error.name} inputClass="w-96" />
      <Button onClick={handlerSubmit}>Добавить</Button>
    </div>
  );
};

export default CreateTodo;

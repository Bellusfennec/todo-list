/* eslint-disable react-hooks/exhaustive-deps */
import { HandlerChange, ObjectData } from "../../../types";
import TextareaField from "../../common/field/TextareaField";

interface UpdateTodoProps {
  data: ObjectData;
  className?: string;
  onChange: ({ name, value }: HandlerChange) => void;
}

const UpdateTodo = (props: UpdateTodoProps) => {
  const { data, className, onChange } = props;

  return (
    <div className={"flex flex-col sm:flex-row gap-3 w-full items-start" + (className ? ` ${className}` : "")}>
      <TextareaField name="name" value={data.name} onChange={onChange} />
    </div>
  );
};

export default UpdateTodo;

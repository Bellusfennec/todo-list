import { HandlerChange } from "../../../../types";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

interface CheckboxFieldProps {
  placeholder?: string;
  value: boolean;
  name: string;
  onChange: ({ name, value }: HandlerChange) => void;
  type?: string;
  label?: string;
  className?: string;
}

const CheckboxField = (props: CheckboxFieldProps) => {
  const { value, name, label, onChange, className } = props;

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked } = event.target;
    const value = type === "checkbox" ? checked : event.target.value;
    onChange?.({ name, value });
  };

  return (
    <label className={"flex items-center group" + (label ? " gap-[8px]" : "") + (className ? ` ${className}` : "")}>
      <input type="checkbox" name={name} checked={value} onChange={handlerChange} className="hidden" />
      <div className="cursor-pointer">
        {!value && <FaRegCircle className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition duration-200" />}
        {value && <FaRegCircleCheck className="w-6 h-6 text-green-600 hover:text-green-800 transition duration-200" />}
      </div>
      <p className="text-[#344054] text-[14px] font-medium">{label}</p>
    </label>
  );
};

export default CheckboxField;

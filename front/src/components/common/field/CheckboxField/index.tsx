import { HandlerChange } from "../../../../types";
import Icon from "../../Icon";

interface CheckboxFieldProps {
  placeholder?: string;
  value: boolean;
  name: string;
  onChange: ({ name, value }: HandlerChange) => void;
  type?: string;
  label?: string;
}

const CheckboxField = (props: CheckboxFieldProps) => {
  const { value, name, label, onChange } = props;

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked } = event.target;
    const value = type === "checkbox" ? checked : event.target.value;
    onChange?.({ name, value });
  };

  return (
    <label className={"flex items-center group" + (label ? " gap-[8px]" : "")}>
      <input type="checkbox" name={name} checked={value} onChange={handlerChange} className="hidden" />
      <div
        className={
          "w-[16px] h-[16px] bg-white border border-[#D0D5DD] rounded-[4px] flex justify-center items-center group-hover:border-[#3C59FF]" +
          (value ? " border-[#3C59FF]" : "")
        }
      >
        {value && <Icon name="check" className="text-[#3C59FF] !w-[12px] !h-[12px]" />}
      </div>
      <p className="text-[#344054] text-[14px] font-medium">{label}</p>
    </label>
  );
};

export default CheckboxField;

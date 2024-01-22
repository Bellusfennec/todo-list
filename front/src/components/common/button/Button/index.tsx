import { ColorComponent, SizeComponent } from "../../../../types";

interface IButtonProps {
  onClick?: (event: any) => void;
  children: React.ReactNode;
  className?: string;
  size?: SizeComponent;
  color?: ColorComponent;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const { onClick, children, className, size = "medium", color = "simple", disabled } = props;

  const sizeClass = (s: SizeComponent) => {
    if (s === "big") return " py-[12px] px-[24px] font-semibold";
    if (s === "medium") return " py-[10px] px-[20px] font-semibold";
    if (s === "small") return " py-[8px] px-[16px] font-medium text-[14px]";
  };

  const colorClass = (c: ColorComponent) => {
    if (c === "primary") return " bg-cyan-600 text-white";
    if (c === "simple") return " text-cyan-600";
  };

  return (
    <button
      onClick={onClick}
      className={
        "self-start disabled:bg-gray-300 flex justify-center gap-[8px] rounded-[8px] border border-gray-300 transition duration-200 focus:shadow-field-outer hover:shadow-field-outer" +
        sizeClass(size) +
        colorClass(color) +
        (className ? " " + className : "")
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

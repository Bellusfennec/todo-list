import { FaRegFileLines } from "react-icons/fa6";

interface LogoProps {
  className?: string;
}

const Logo = (props: LogoProps) => {
  const { className } = props;
  return (
    <div className={"font-bold flex items-center gap-2" + (className ? ` ${className}` : "")}>
      <FaRegFileLines />
      <h1>ToDo List</h1>
    </div>
  );
};

export default Logo;

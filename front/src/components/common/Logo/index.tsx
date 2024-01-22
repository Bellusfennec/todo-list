interface LogoProps {
  className?: string;
}

const Logo = (props: LogoProps) => {
  const { className } = props;
  return <h1 className={"font-bold text-cyan-600" + (className ? ` ${className}` : "")}>ToDo List</h1>;
};

export default Logo;

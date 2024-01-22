interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = (props: MainContainerProps) => {
  const { children, className } = props;

  return <div className={"max-w-[1000px] mx-auto" + (className ? ` ${className}` : "")}>{children}</div>;
};

export default MainContainer;

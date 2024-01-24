interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = (props: MainContainerProps) => {
  const { children, className } = props;

  return (
    <div className={"px-4 sm:px-12 lg:px-0 max-w-[950px] mx-auto" + (className ? ` ${className}` : "")}>{children}</div>
  );
};

export default MainContainer;

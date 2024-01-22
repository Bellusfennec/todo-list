interface ErrorLayoutProps {
  children: React.ReactNode;
}

const ErrorLayout = (props: ErrorLayoutProps) => {
  const { children } = props;

  return (
    <div className="animate-appearance flex flex-col min-h-screen justify-center items-center">
      <main>{children}</main>
    </div>
  );
};

export default ErrorLayout;

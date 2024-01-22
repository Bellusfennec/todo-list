interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = (props: AppLoaderProps) => {
  const { children } = props;
  return <>{children}</>;
};

export default AppLoader;

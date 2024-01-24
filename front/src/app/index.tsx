import AppLoader from "../hoc/AppLoader";
import AppProvider from "../hoc/AppProvider";
import AppRoutes from "../routes";

const App = () => {
  return (
    <AppProvider>
      <AppLoader>
        <AppRoutes />
      </AppLoader>
    </AppProvider>
  );
};

export default App;

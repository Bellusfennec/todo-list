import AppLoader from "../hoc/AppLoader";
import AppRoutes from "../routes";

const App = () => {
  return <AppLoader><AppRoutes /></AppLoader>
}
 
export default App;
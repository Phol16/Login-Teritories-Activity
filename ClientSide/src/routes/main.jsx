import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const mainRouter = createBrowserRouter([
{
  path:'/account/login',
  element: <LoginPage/>
}
]);

export default mainRouter;
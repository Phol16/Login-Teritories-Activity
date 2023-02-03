import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>
  },
  {
    path: '/account/login',
    element: <LoginPage />,
  },
]);

export default mainRouter;

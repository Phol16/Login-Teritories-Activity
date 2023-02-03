import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Protected from './Protected';
import ThePageNotFound from '../pages/pageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/account/login' element={<LoginPage />} />
      <Route
        path='/'
        element={
          <Protected> {/*Protected component wraps Homepage, if not authenticated it will redirect back to loginpage */}
            <HomePage />
          </Protected>
        }
      />
      <Route path='/*' element={<ThePageNotFound />} />  {/* will output ThePageNotFound component*/}
    </Routes>
  );
};

export default App;

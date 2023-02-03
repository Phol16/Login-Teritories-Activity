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
          <Protected>
            <HomePage />
          </Protected>
        }
      />
      <Route path='/*' element={<ThePageNotFound />} />
    </Routes>
  );
};

export default App;

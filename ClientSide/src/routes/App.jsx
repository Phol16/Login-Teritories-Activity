import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PageNotFound from '../pages/pageNotFound';
import Protected from './Protected';

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
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;

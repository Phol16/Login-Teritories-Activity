import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PageNotFound from '../pages/pageNotFound';
import PrivateRoute from './privateRoute';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={
        <PrivateRoute>
      <HomePage />
      </PrivateRoute>
      } />
      <Route path='/account/login' element={<LoginPage />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Main;

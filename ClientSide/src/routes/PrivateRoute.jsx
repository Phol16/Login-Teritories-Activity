import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const [state, setState] = useState(true);
  console.log(state)
  return state ? children : <Navigate to='/account/login'/>;
};

export default PrivateRoute;

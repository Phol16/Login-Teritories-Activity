import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const [state, setState] = useState(false);
  console.log(state)
  return state ? children : <Navigate to='/account/login'/>;
};

export default PrivateRoute;

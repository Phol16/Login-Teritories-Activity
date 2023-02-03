import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/Account/Login');
    localStorage.removeItem('token');
  };

  return (
    <div className='fixed bottom-1 mr-52'>
      <button className='text-black p-1 shadow' onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/Account/Login'); // redirect to the homepage once logout is clicked
    localStorage.removeItem('token'); // will remove the value of the token in the localstorage
  };

  return (
    <div className='flex justify-end fixed bottom-3 ml-56 md:ml-80 z-20'>
      <button className='text-black p-1 shadow ' onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

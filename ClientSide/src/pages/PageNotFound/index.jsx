import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='bg-gray-500 w-screen h-screen flex flex-col justify-center items-center'>
      <h3 className='text-white text-2xl'>PageNotFound</h3>
      <Link to='/'><button className='text-black p-1 flex justify-center items-center'><FontAwesomeIcon icon={faHome}/>Home</button></Link>
    </div>
  );
};

export default PageNotFound;

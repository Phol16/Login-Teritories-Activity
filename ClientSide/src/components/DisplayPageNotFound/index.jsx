import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayPageNotFound = () => {
  return (
    <div className='bg-gray-500 w-screen h-screen flex flex-col justify-center items-center gap-3'>
      <h3 className='text-white text-2xl md:text-4xl'>PageNotFound</h3>
      <Link to='/'>
        <button className=' p-2 border-none bg-white text-black hover:bg-slate-500 hover:text-white '>
          <FontAwesomeIcon icon={faHome} />
          Home
        </button>
      </Link>
    </div>
  );
};

export default DisplayPageNotFound;

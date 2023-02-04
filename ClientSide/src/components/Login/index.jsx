import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password }; // store the username and password value in the data variable
    setError('');

    try {
      //sends username and password to the server to check credentials
      const response = await fetch('http://localhost:3000/Account/SignIn', {
        method: 'post',
        cors: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (response.message !== 'Invalid username or password.') {
        localStorage.setItem('token', true); //stores a true value in the local storage
        return navigate('/'); // redirect to the homepage
      }
      throw new Error(response.message); // will throw the error message from the server response
    } catch (err) {
      setError(`${err}`); // will set the value for the error state
    }
  };

  return (
    <div className='bg-slate-700 p-10 rounded-lg w-72'>
      {error && <p className='bg-red-700 text-white text-sm rounded-sm p-2 mb-5'>{error}</p>} {/*display the error if the error state has value */}
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <label htmlFor='username' className='flex items-center gap-1'>
          <FontAwesomeIcon icon={faUser} />
          Username:
        </label>
        <input
          type='text'
          id='username'
          required
          className='bg-white text-black'
          onChange={(e) => {
            setError('');
            setUsername(e.target.value);
          }}
        />
        <label htmlFor='password' className='flex items-center gap-1'>
          <FontAwesomeIcon icon={faLock} />
          Password:
        </label>
        <input
          type='password'
          id='password'
          required
          className='bg-white text-black'
          onChange={(e) => {
            setError('');
            setPassword(e.target.value);
          }}
        />
        <button type='submit' className=' bg-white text-black w-fit self-end mt-5 hover:bg-slate-500 hover:text-white'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

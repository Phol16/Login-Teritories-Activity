import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    setError('');

    try {
      const response = await fetch('http://localhost:8000/Account/SignIn', {
        method: 'post',
        cors: 'cors',
        headers: {
          'Content-Type':  "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (response.message !== 'Invalid username or password.') {
        localStorage.setItem('token', true); //stores a true value in the local storage
        return navigate('/');
      }
      throw new Error(response.message);
    } catch (err) {
      setError(`${err}`);
    }
  };

  return (
    <div className='bg-slate-700 p-10 rounded-lg'>
      {error && <p className='bg-red-700 text-white text-sm rounded-sm p-2 mb-5'>{error}</p>}
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
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
        <label htmlFor='password'>Password:</label>
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
        <button type='submit' className='bg-white text-black w-fit self-end mt-5'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

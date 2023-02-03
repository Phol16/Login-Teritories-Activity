import React, { useEffect, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(username,password)


  const handleSubmit= async(e)=>{
    e.preventDefault();
    const data = {username,password}
    };





  return (
    <div className='bg-sky-800 p-10 rounded-lg'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' required className='bg-white text-black' onChange={(e)=>{setUsername(e.target.value)}}/>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' required className='bg-white text-black' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit' className='bg-white text-black w-fit self-end mt-5' >Sign In</button>
      </form>
    </div>
  );
};

export default Login;

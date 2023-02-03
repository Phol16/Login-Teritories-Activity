import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
  const token = localStorage.getItem('token') // this will get the value of token from the local storage

  return token ? children : <Navigate to='/account/login' replace/> //conditional statement to check if token is truthy or not
}

export default Protected
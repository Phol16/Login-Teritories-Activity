import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children, valid}) => {
  const token = localStorage.getItem('token')

  return token ? children : <Navigate to='/account/login' replace/>
}

export default Protected
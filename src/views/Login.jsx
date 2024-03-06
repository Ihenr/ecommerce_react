import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  return (
    <div>
      <p>Welcome! Enter your email and Password to continue</p>
      <div className=" bg-blue-300 w-4/6">
        <h2 className=" text-center font-bold">Test data</h2>
        <p>henry12@gmail.com</p>
        <p>henry1234</p>
      </div>
      <LoginForm />

      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;

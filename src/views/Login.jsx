import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import img from '../assets/e-commerce.png';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden ">
      <div className=" w-1/4 p-6 border-2  relative rounded-xl flex flex-col justify-center items-center shadow-2xl ">
        <div className="h-24 w-24 border border-r-amber-50 rounded-full p-3 bg-black absolute top-[-50px] ">
          <img src={img} alt="logo" className=""></img>
        </div>
        <p className="text-2xl py-5">
          Welcome! Enter your email and Password to continue
        </p>
        <div className=" w-full flex flex-col gap-1 bg-blue-200 rounded-lg p-2 text-[#515151] ">
          <h2 className=" text-center font-bold">Test data</h2>
          <p>
            <i className="bx bx-envelope"></i> henry12@gmail.com
          </p>
          <p>
            <i className="bx bx-lock-alt"></i> henry1234
          </p>
        </div>
        <LoginForm />

        {isUserLogged && <Navigate to="/" replace />}
      </div>
    </div>
  );
};

export default Login;

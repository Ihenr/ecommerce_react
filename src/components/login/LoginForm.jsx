import React, { useState } from 'react';
import { Await } from 'react-router-dom';
import { loginService } from '../../services/loginService';
import { useDispatch } from 'react-redux';
import { loginIn, updateToken, updateUserData } from '../../store/slices/user.slice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [toggleType, setToggleType] = useState('password');
  const [iconClass, setIconClass] = useState('bx bx-show'); // Estado para el ícono
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  }); // Estado para el formulario de login

  // Funcion para cambiar el tipo de input password o text
  const hangleClickType = () => {
    if (toggleType === 'password') {
      setToggleType('text');
      setIconClass('bx bx-low-vision'); // Cambiar a ícono de ocultar contraseña
    } else if (toggleType === 'text') {
      setToggleType('password');
      setIconClass('bx bx-show'); // Cambiar a ícono de mostrar contraseña
    }
  };
  //----------------------------------------------

  // const handleChangeEmail = (e) => {
  //   const { value } = e.target;
  //   setLoginFormData({
  //     ...loginFormData,
  //     email: value,
  //   });
  // };

  // const handleChangePassword = (e) => {
  //   const { value } = e.target;
  //   setLoginFormData({
  //     ...loginFormData,
  //     password: value,
  //   });
  // };

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = async () => {
    const loginData = await loginService(loginFormData);

    const userData = {
      id: loginData.id,
      firstName: loginData.firstName,
      lastName: loginData.lastName,
      email: loginData.email,
    };

    const token = loginData.token;

    dispatch(updateUserData(userData));
    dispatch(updateToken(token));
    dispatch(loginIn());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="mt-4 flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="emailId">Email</label>
          <input
            type="email"
            id="emailId"
            name="email"
            placeholder="example@email.com"
            value={loginFormData.email}
            required
            className="border-2 border-slate-500 py-2 px-3 rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="passwordId">Password</label>
          <div className="flex flex-col w-full relative">
            <input
              type={toggleType}
              id="passwordId"
              name="password"
              value={loginFormData.password}
              required
              placeholder="**************"
              className="  border-2 border-slate-500 py-2 px-3 rounded-xl"
            />
            <button
              type="button"
              onClick={hangleClickType}
              className="absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl text-slate-600"
            >
              <i className={iconClass}></i>
            </button>
          </div>
        </div>
        <button className=" bg-blue-500 p-2 rounded-md hover:bg-blue-950 hover:text-white uppercase text-zinc-800 font-semibold		">
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;

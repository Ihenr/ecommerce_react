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
      id: loginData.data.user.id,
      firstName: loginData.data.user.firstName,
      lastName: loginData.data.user.lastName,
      email: loginData.data.user.email,
    };

    const token = loginData.data.token;

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
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <label htmlFor="emailId">Email</label>
          <input
            type="email"
            id="emailId"
            name="email"
            placeholder="example@email.com"
            value={loginFormData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password</label>
          <div>
            <input
              type={toggleType}
              id="passwordId"
              name="password"
              value={loginFormData.password}
              required
            />
            <button type="button" onClick={hangleClickType}>
              <i className={iconClass}></i>
            </button>
          </div>
        </div>
        <button className=" bg-blue-500 p-2 rounded-md hover:bg-blue-300">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;

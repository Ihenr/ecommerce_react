import React from 'react';
import { reset } from '../store/slices/user.slice';
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);

  return (
    <div>
      {isLogged && <button onClick={() => dispatch(reset())}>logOut salir</button>}
    </div>
  );
};

export default Logout;

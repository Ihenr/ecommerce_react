import { createSlice } from '@reduxjs/toolkit';

const emptyState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  isLogged: false,
};

const initialStateLocalStorage = JSON.parse(localStorage.getItem('userData'));

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateLocalStorage || emptyState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;
      // local storage es para guardar datos en el navegador
      const stateLocalStorage = structuredClone({ ...state });

      state.id = newUserData.id;
      stateLocalStorage.id = newUserData.id; // Guardar en local storage
      state.firstName = newUserData.firstName;
      stateLocalStorage.firstName = newUserData.firstName;
      state.lastName = newUserData.lastName;
      stateLocalStorage.lastName = newUserData.lastName;
      state.email = newUserData.email;
      stateLocalStorage.email = newUserData.email;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    updateToken(state, action) {
      const newToken = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.token = newToken;
      stateLocalStorage.token = newToken;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    loginIn(state) {
      const stateLocalStorage = structuredClone({ ...state });

      state.isLogged = true;
      stateLocalStorage.isLogged = true;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    reset() {
      //No se puede hacer una asignacion directa del State
      localStorage.removeItem('userData');
      return emptyState;
    },
  },
});

export const { updateUserData, updateToken, loginIn, reset } = userSlice.actions; // exportar las acciones

export default userSlice.reducer;

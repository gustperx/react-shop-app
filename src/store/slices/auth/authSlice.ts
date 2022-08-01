import { createSlice } from "@reduxjs/toolkit";

export interface Auth {
  user: {
    name?: string;
    email?: string;
    logged: boolean;
  };
}

const initialState: Auth = {
  user: {
    name: "",
    email: "",
    logged: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user.name = "";
      state.user.email = "";
      state.user.logged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

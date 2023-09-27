import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
};
const LoginSlice = createSlice({
  name: "checkLogin",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      return {
        ...state,
        isLogin: action.payload,
      };
    },
  },
});
export const { setIsLogin } = LoginSlice.actions;
export default LoginSlice.reducer;

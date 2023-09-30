import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    infor_user: null,
    data: [],
    isDarkMode: JSON.parse(localStorage.getItem("dark")) || false,
  },
  reducers: {
    setInforUser: (state, action) => {
      return {
        ...state,
        infor_user: action.payload,
      };
    },
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setIsDarkMode: (state, action) => {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    },
  },
});
export default GlobalSlice.reducer;
export const { setInforUser, setData, setIsDarkMode } = GlobalSlice.actions;

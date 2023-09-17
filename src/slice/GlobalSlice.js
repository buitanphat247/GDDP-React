import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    infor_user: null,
    data: [],
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
  },
});
export default GlobalSlice.reducer;
export const { setInforUser, setData } = GlobalSlice.actions;

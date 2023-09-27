import { createSlice } from "@reduxjs/toolkit";

const SideBarToggleSlice = createSlice({
  name: "SideBarToggleSlice",
  initialState: {
    isShow: false,
  },
  reducers: {
    setSideBarShow: (state, action) => {
      return {
        ...state,
        isShow: action.payload,
      };
    },
  },
});
export default SideBarToggleSlice.reducer;
export const { setSideBarShow } = SideBarToggleSlice.actions;

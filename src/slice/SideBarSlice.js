import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isShowSideBar: true,
};
const SideBarSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    setIsShowSideBar: (state, action) => {
      return {
        ...state,
        isShowSideBar: action.payload,
      };
    },
  },
});
export const { setIsShowSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;

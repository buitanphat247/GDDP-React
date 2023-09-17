import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  progress: 0,
  link_image: "",
  name_image: null,
};
const UploadImageSlice = createSlice({
  name: "UploadImageSlice",
  initialState,
  reducers: {
    handleProgress: (state, action) => {
      return {
        ...state,
        progress: action.payload,
      };
    },
    setLink_image: (state, action) => {
      return {
        ...state,
        link_image: action.payload,
      };
    },
    setName_image: (state, action) => {
      return {
        ...state,
        name_image: action.payload,
      };
    },
    handleRemoveImage: (state, action) => {
      return {
        ...state,
        progress: 0,
        link_image: "",
        name_image: null,
      };
    },
  },
});
export default UploadImageSlice.reducer;
export const {
  handleProgress,
  setLink_image,
  setName_image,
  handleRemoveImage,
} = UploadImageSlice.actions;

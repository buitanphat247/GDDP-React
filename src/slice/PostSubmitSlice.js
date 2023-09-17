import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data_post: {},
};
const PostSubmitSlice = createSlice({
  name: "PostSubmitSlice",
  initialState,
  reducers: {
    setData_Post: (state, action) => {
      console.log("🚀 ~ file: PostSubmitSlice.js:10 ~ action:", action);
      return {
        ...state,
        data_post: action.payload.value,
      };
    },
  },
});
export default PostSubmitSlice.reducer;
export const { setData_Post } = PostSubmitSlice.actions;

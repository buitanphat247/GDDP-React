import { createSlice } from "@reduxjs/toolkit";

const EditorSlice = createSlice({
  name: "editor",
  initialState: {
    value: "",
  },
  reducers: {
    setValueEditor: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    resetValueEditor: (state, action) => {
      return {
        ...state,
        value: "",
      };
    },
  },
});
export default EditorSlice.reducer;
export const { setValueEditor, resetValueEditor } = EditorSlice.actions;

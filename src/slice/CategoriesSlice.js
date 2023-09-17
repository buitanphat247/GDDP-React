import { createSlice } from "@reduxjs/toolkit";
const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState: {
    list_categories: [],
    name_category: "",
    id_category: "",
  },
  reducers: {
    setListCategories: (state, action) => {
      return {
        ...state,
        list_categories: action.payload,
      };
    },
    setNameCategory: (state, action) => {
      return {
        ...state,
        name_category: action.payload,
      };
    },
    setIdCategory: (state, action) => {
      return {
        ...state,
        id_category: action.payload,
      };
    },
  },
});
export default CategoriesSlice.reducer;
export const { setListCategories, setNameCategory, setIdCategory } =
  CategoriesSlice.actions;

import { combineReducers } from "redux";
import LoginSlice from "../slice/LoginSlice";
import UploadImageSlice from "../slice/UploadImageSlice";
import PostSubmitSlice from "../slice/PostSubmitSlice";
import CategoriesSlice from "../slice/CategoriesSlice";
import EditorSlice from "../slice/EditorSlice";
import GlobalSlice from "../slice/GlobalSlice";
import SideBarToggleSlice from "../slice/SideBarToggleSlice";

const reducers = combineReducers({
  Login: LoginSlice,
  UploadImage: UploadImageSlice,
  DataPostSlice: PostSubmitSlice,
  ListCategories: CategoriesSlice,
  EditorSlice: EditorSlice,
  global: GlobalSlice,
  ShowSideBarSlice: SideBarToggleSlice,
});
export default reducers;

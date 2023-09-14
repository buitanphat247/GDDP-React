import { combineReducers } from "redux";
import LoginSlice from "../slice/LoginSlice";
import SideBarSlice from "../slice/SideBarSlice";

const reducers = combineReducers({
  Login: LoginSlice,
  ToggleSideBar: SideBarSlice,
});
export default reducers;

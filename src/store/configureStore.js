import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
// import { onAuthStateChanged } from "@firebase/auth";
// import { auth } from "./firebaseconfig";
// import { setIsLogin } from "../slice/LoginSlice";

const store = configureStore({
  reducer: reducers,
});
export default store;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     store.dispatch(setIsLogin(true));
//     localStorage.setItem("isLogin", true);
//   } else {
//     store.dispatch(setIsLogin(false));
//     localStorage.setItem("isLogin", false);
//   }
// });

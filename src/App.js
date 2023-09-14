import { Route, Routes } from "react-router";
import Home from "./layout/Home";
import Main from "./layout/Main";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
        </Route>
        <Route
          path="/sign-up-for-new-users"
          element={<SignUpPage></SignUpPage>}
        ></Route>
        <Route
          path="/sign-up-for-new-users"
          element={<SignUpPage></SignUpPage>}
        ></Route>
        <Route
          path="/sign-in-for-users"
          element={<SignInPage></SignInPage>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;

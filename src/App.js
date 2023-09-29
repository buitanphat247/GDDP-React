import { Route, Routes } from "react-router";

import Main from "./layout/Main";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashBoard from "./layout/DashBoard";
import OverviewPosts from "./modules/Manage/OverviewPosts";
import AddCategory from "./modules/actions_add_items/AddCategory";
import AddPost from "./modules/actions_add_items/AddPost";
import OverviewCategories from "./modules/Manage/OverviewCategories";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import AddFriendPage from "./pages/AddFriendPage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import UpdateCategory from "./modules/actions_add_items/UpdateCategory";
import DetailPage from "./pages/DetailPage";
import { useSelector } from "react-redux";
import UpdatePost from "./modules/actions_add_items/UpdatePost";

const App = () => {
  const { isLogin } = useSelector((state) => state.Login);
  if (localStorage.getItem("dark") === "true") {
    // Nếu có, thêm lớp vào thẻ body
    document.body.classList.add("dark:bg-slate-500");
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/search-page-content"
            element={<SearchPage></SearchPage>}
          ></Route>
          <Route
            path="/add-new-friend"
            element={<AddFriendPage></AddFriendPage>}
          ></Route>
          <Route
            path="/details-news-page/:slug"
            element={<DetailPage></DetailPage>}
          ></Route>
          {/* <Route
            path="/anh-dep-ba-ria-vung-tau"
            element={<Album></Album>}
          ></Route> */}
          {isLogin && (
            <>
              <Route path="/manage" element={<DashBoard></DashBoard>}>
                <Route
                  path="/manage"
                  element={<OverviewPosts></OverviewPosts>}
                ></Route>
                <Route
                  path="/manage/overview-categories"
                  element={<OverviewCategories></OverviewCategories>}
                ></Route>
                <Route
                  path="/manage/categories"
                  element={<AddCategory></AddCategory>}
                ></Route>
                <Route
                  path="/manage/categories/:slug"
                  element={<UpdateCategory></UpdateCategory>}
                ></Route>

                <Route
                  path="/manage/add-posts"
                  element={<AddPost></AddPost>}
                ></Route>
                <Route
                  path="/manage/add-posts/:slug"
                  element={<UpdatePost></UpdatePost>}
                ></Route>
              </Route>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </>
          )}
        </Route>
        {isLogin === false && (
          <>
            <Route
              path="/sign-up-for-new-users"
              element={<SignUpPage></SignUpPage>}
            ></Route>
            <Route
              path="/sign-in-for-users"
              element={<SignInPage></SignInPage>}
            ></Route>
          </>
        )}
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
};

export default App;

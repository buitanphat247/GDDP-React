import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
const Main = React.lazy(() => import("./layout/Main"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashBoard = React.lazy(() => import("./layout/DashBoard"));
const AddCategory = React.lazy(() =>
  import("./modules/actions_add_items/AddCategory")
);
const AddPost = React.lazy(() => import("./modules/actions_add_items/AddPost"));
const OverviewCategories = React.lazy(() =>
  import("./modules/Manage/OverviewCategories")
);
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const AddFriendPage = React.lazy(() => import("./pages/AddFriendPage"));
const Home = React.lazy(() => import("./pages/Home"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const UpdateCategory = React.lazy(() =>
  import("./modules/actions_add_items/UpdateCategory")
);
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const UpdatePost = React.lazy(() =>
  import("./modules/actions_add_items/UpdatePost")
);
const DocsPage = React.lazy(() => import("./pages/DocsPage"));
const OverviewPosts = React.lazy(() =>
  import("./modules/Manage/OverviewPosts")
);
const GamesPage = React.lazy(() => import("./pages/GamesPage"));

const App = () => {
  const { isLogin } = useSelector((state) => state.Login);
  const { isDarkMode } = useSelector((state) => state.global);
  if (localStorage.getItem("dark") === "true") {
    // Nếu có, thêm lớp vào thẻ body
    document.body.classList.add("dark:bg-slate-500");
  }
  useEffect(() => {
    if (isDarkMode === true) {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute("class", "dark");
    } else {
      const htmlElement = document.querySelector("html");
      htmlElement.removeAttribute("class", "dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <Suspense>
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
            <Route path="/games" element={<GamesPage></GamesPage>}></Route>
            <Route path="/docs" element={<DocsPage></DocsPage>}></Route>
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
      </Suspense>
    </>
  );
};

export default App;

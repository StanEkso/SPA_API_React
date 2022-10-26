import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AlbumPage, { loader as albumLoader } from "./pages/AlbumPage";
import Albums, { loader as albumsLoader } from "./pages/Albums";
import UsersPage, { loader as usersPageLoader } from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import UserPage, { loader as userLoader } from "./pages/UserPage";
import MainPage from "./pages/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFound />,
        index: true,
      },
      {
        path: "/albums",
        errorElement: <NotFound />,
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "/users/",
        element: <UsersPage />,
        loader: usersPageLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
        loader: userLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/albums/:id",
        element: <AlbumPage />,
        loader: albumLoader,
        errorElement: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

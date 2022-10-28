import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import AlbumPage, { loader as albumLoader } from "./pages/albums/[id]";
import UsersPage, { loader as usersPageLoader } from "./pages/users/";
import NotFoundPage from "./pages/404";
import UserPage, { loader as userLoader } from "./pages/users/[id]";
import MainPage from "./pages";
import CreateUserPage, {
  action as createUserAction,
} from "./pages/users/create";
import CreateAlbumPage, {
  action as createAlbumAction,
} from "./pages/albums/create";
import AlbumsPage, { loader as albumsLoader } from "./pages/albums";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        index: true,
      },
      {
        path: "/albums",
        children: [
          {
            path: "/albums",
            loader: albumsLoader,
            element: <AlbumsPage />,
            index: true,
          },
          {
            path: "/albums/create",
            element: <CreateAlbumPage />,
            loader: usersPageLoader,
            action: createAlbumAction,
          },
          {
            path: "/albums/:id",
            element: <AlbumPage />,
            loader: albumLoader,
          },
        ],
      },
      {
        path: "/users",
        children: [
          {
            path: "/users",
            element: <UsersPage />,
            loader: usersPageLoader,
            index: true,
          },
          {
            path: "/users/create",
            element: <CreateUserPage />,
            action: createUserAction,
          },
          {
            path: "/users/:id",
            element: <UserPage />,
            loader: userLoader,
          },
        ],
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AlbumPage, { loader as albumLoader } from "./pages/AlbumPage";
import Albums, { loader as albumsLoader } from "./pages/Albums";
import UsersPage, { loader as usersPageLoader } from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import UserPage, { loader as userLoader } from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import CreateUser, { action as createUserAction } from "./pages/CreateUser";
import CreateAlbum, { action as createAlbumAction } from "./pages/CreateAlbum";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        index: true,
      },
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "/users/",
        element: <UsersPage />,
        loader: usersPageLoader,
      },
      {
        path: "/users/create",
        element: <CreateUser />,
        action: createUserAction,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
        loader: userLoader,
      },
      {
        path: "/albums/:id",
        element: <AlbumPage />,
        loader: albumLoader,
      },
      {
        path: "/albums/create",
        element: <CreateAlbum />,
        loader: usersPageLoader,
        action: createAlbumAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

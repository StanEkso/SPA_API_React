import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Albums from "./pages/Albums";
import MainPage, { loader as mainPageLoader } from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import UserPage, { loader as userLoader } from "./pages/UserPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        loader: mainPageLoader,
        errorElement: <NotFound />,
        index: true,
      },
      {
        path: "/albums",
        errorElement: <NotFound />,
        element: <Albums />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
        loader: userLoader,
        errorElement: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

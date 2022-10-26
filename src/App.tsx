import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Albums from "./pages/Albums";
import MainPage, { loader as mainPageLoader } from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
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
        index: true,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

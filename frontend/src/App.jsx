import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />
    }
  ]);
  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  );
};

export default App;

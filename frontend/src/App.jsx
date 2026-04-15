import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";

export const backendUrl = "http://localhost:3000";

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          backendUrl + "/api/user/current-user",
          { withCredentials: true },
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
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

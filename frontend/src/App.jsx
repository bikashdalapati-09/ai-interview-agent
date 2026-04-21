import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import InterviewPage from "./pages/InterviewPage"
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewHistory from "./pages/InterviewHistory";
import InterviewReport from "./pages/InterviewReport";
import Pricing from "./pages/Pricing";

export const backendUrl = "https://ai-interview-agent-1-qwil.onrender.com";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          backendUrl + "/api/user/current-user",
          { withCredentials: true },
        );
        dispatch(setUserData(res.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/interview",
      element: <InterviewPage />,
    },
    {
      path: "/history",
      element: <InterviewHistory />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/report/:id",
      element: <InterviewReport />,
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

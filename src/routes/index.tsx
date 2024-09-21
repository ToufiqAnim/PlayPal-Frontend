import { createBrowserRouter } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Facilities from "../pages/Facilities";
import FacilityDetails from "../pages/FacilityDetails";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "facility",
        element: <Facilities />,
      },
      {
        path: `facility/:id`,
        element: <FacilityDetails />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

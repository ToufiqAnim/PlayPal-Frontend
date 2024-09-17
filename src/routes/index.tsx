import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Facilities from "../pages/Facilities";
import FacilityDetails from "../pages/FacilityDetails";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../pages/Bookings/AboutUs";
import ContactUs from "../pages/Bookings/ContactUs";
import Booking from "../pages/Bookings/BookingForm";
import ProtectedRoute from "./ProtectedRoutes";
import Bookings from "../pages/Bookings/Bookings";

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
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "bookings",
        element: (
          <ProtectedRoute role="user">
            <Bookings></Bookings>
          </ProtectedRoute>
        ),
      },
      {
        path: "bookings/:facilityId",
        element: (
          <ProtectedRoute role="user">
            <Bookings></Bookings>
          </ProtectedRoute>
        ),
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

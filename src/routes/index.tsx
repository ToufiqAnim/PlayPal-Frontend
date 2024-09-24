import { createBrowserRouter } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Facilities from "../pages/Facility/Facilities";
import FacilityDetails from "../pages/Facility/FacilityDetails";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../pages/Bookings/AboutUs";
import ContactUs from "../pages/Bookings/ContactUs";
import Booking from "../pages/Bookings/BookingForm";
import ProtectedRoute from "./ProtectedRoutes";
import Bookings from "../pages/Bookings/Bookings";
import UserBookingDetails from "../pages/Dashboard/User/MyBookings/UserBookingDetails";
import MyBookings from "../pages/Dashboard/User/MyBookings/MyBookings";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import Dashboard from "../components/layout/Dashboard";
import { generateRoutes } from "../utils/GenerateRoutes";
import { adminPaths } from "./adminRoutes";
import { userPaths } from "./userRoutes";

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
        path: "facility",
        element: <Facilities />,
      },
      {
        path: `facility/:id`,
        element: <FacilityDetails />,
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
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: generateRoutes(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: generateRoutes(userPaths),
  },
]);

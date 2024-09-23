import React from "react";
import Banner from "../components/Banner";
import Facilities from "./Facilities";

import MyBookings from "./Dashboard/User/MyBookings/MyBookings";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard/AdminDashboard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Facilities />
      <AdminDashboard />
    </div>
  );
};

export default Home;

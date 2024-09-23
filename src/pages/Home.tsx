import React from "react";
import Banner from "../components/Banner";
import Facilities from "./Facilities";

import MyBookings from "./Dashboard/User/MyBookings/MyBookings";

const Home = () => {
  return (
    <div>
      <Banner />
      <Facilities />
      <MyBookings />
    </div>
  );
};

export default Home;

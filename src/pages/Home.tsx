import React from "react";
import Banner from "../components/Banner";
import Facilities from "./Facilities";
import Bookings from "./Bookings/BookingForm";

const Home = () => {
  return (
    <div>
      <Banner />

      <Facilities />
    </div>
  );
};

export default Home;

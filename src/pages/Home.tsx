import React from "react";
import Banner from "../components/Banner";
import Facilities from "./Facility/Facilities";

import MyBookings from "./Dashboard/User/MyBookings/MyBookings";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard/AdminDashboard";
import HowItWorks from "./HowItWorks";
import ExploreOurServices from "./ExploreServices";
import Testimonial from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Featured Facilities
      </h2>
      <Facilities />

      <ExploreOurServices />
      <Testimonial />
    </div>
  );
};

export default Home;

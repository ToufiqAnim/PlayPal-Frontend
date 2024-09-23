import React from "react";
import BookingForm from "./BookingForm";
import { useParams } from "react-router-dom";
import FacilityOverview from "./FacilityOverview";

const Bookings = () => {
  const { facilityId } = useParams();

  return (
    <div>
      <FacilityOverview facilityId={facilityId}></FacilityOverview>
      <BookingForm facilityId={facilityId}></BookingForm>
    </div>
  );
};

export default Bookings;

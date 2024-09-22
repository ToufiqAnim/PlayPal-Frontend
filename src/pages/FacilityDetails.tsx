import React from "react";
import { useGetSingleFacilityQuery } from "../redux/api/facility/facilityApi";
import { useParams } from "react-router-dom";
import { AlarmClockOff } from "lucide-react";

const FacilityDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetSingleFacilityQuery(id);
  const facility = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading....
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        No facility found...
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-80 object-cover"
          src={facility.image}
          alt={facility.name}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {facility.name}
          </h1>
          <p className="text-gray-600 mb-6">{facility.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-indigo-600">
              ${facility.pricePerHour}
            </span>
            <button className="btn btn-primary"> Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;

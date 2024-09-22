import React from "react";
import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import { TFacilityIDProps } from "../../types/facility.type";

const FacilityOverview = ({ facilityId }: TFacilityIDProps) => {
  const { data: facilities } = useGetAllFacilityQuery(undefined);

  const facility = facilities?.data?.find((item) => item._id === facilityId);
  return (
    <>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-2xl font-semibold">{facility?.name}</h2>
        <p>{facility?.description}</p>
        <p className="text-sm text-gray-500">Location: {facility?.location}</p>
        <p className="text-sm text-gray-500">
          Price PerHour : ${facility?.pricePerHour}
        </p>
      </div>
    </>
  );
};

export default FacilityOverview;

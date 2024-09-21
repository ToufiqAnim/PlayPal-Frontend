import React from "react";
import { TFacilities, TFacilityProps } from "../types/facility.type";
import { Link } from "react-router-dom";

const FacilitiyList = ({ filteredFacilities, isLoading }: TFacilityProps) => {
  return (
    <div className=" max-w-7xl mx-auto justify-around  grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8  ">
      {/*   {isLoading ? <Spin size="large" /> : null} */}

      {filteredFacilities?.map((item: TFacilities) => (
        <div className="card bg-base-100  shadow-xl" key={item?._id}>
          <figure>
            <img src={item?.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item?.name}
              {/* <div className="badge badge-secondary">{item?.name}</div> */}
            </h2>
            <p>{item?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item?.pricePerHour}</div>
              <Link to={`/facility/${item?._id}`}>
                <div className="badge badge-outline bg-indigo-600 text-white">
                  Details
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilitiyList;

import React from "react";
import { TFacilities, TFacilityProps } from "../../types/facility.type";
import { Link } from "react-router-dom";
import { Card, Spin } from "antd";

const FacilitiyList = ({ filteredFacilities, isLoading }: TFacilityProps) => {
  return (
    <div className="container mx-auto mt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading ? (
          <div className="flex items-center justify-center col-span-full">
            <Spin size="large" />
          </div>
        ) : (
          filteredFacilities?.map((item: TFacilities) => (
            <Card
              key={item?._id}
              hoverable
              className="rounded-xl"
              cover={
                <Link to={`/facility/${item?._id}`}>
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </Link>
              }
            >
              <Card.Meta title={item?.name} description={item?.description} />
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default FacilitiyList;

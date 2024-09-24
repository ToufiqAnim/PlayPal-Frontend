import { Slider } from "antd";
import React from "react";
import {
  setPriceRange,
  usePriceRange,
} from "../../redux/features/facilitySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const FacilityFilters = () => {
  const dispatch = useAppDispatch();
  const { priceRange } = useAppSelector(usePriceRange);

  const handlePriceChange = (value: number | number[]) => {
    dispatch(setPriceRange({ priceRange: value }));
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md  ">
      <h3 className="text-xl font-semibold mb-4 text-black">Price</h3>

      {/* Price Slider */}
      <div className="mb-8">
        <Slider
          range
          min={0}
          max={1000}
          step={10}
          defaultValue={[0, 1000]}
          onChange={handlePriceChange}
          trackStyle={[{ backgroundColor: "#6366f1" }]}
          handleStyle={[
            { backgroundColor: "#6366f1", borderColor: "#6366f1" },
            { backgroundColor: "#6366f1", borderColor: "#6366f1" },
          ]}
          className="w-full"
        />
      </div>

      {/* Price Range Display */}
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1 py-3 px-6 border border-gray-200 rounded-lg text-center ">
          <p className="text-base font-medium text-gray-700">
            Min: {priceRange[0]} $
          </p>
        </div>
        <div className=" py-3 px-6 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700">
            Max: {priceRange[1]} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacilityFilters;

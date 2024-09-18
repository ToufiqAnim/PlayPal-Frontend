import React from "react";
import { useAppSelector } from "../redux/hooks";
import {
  useCurrentPage,
  usePageSize,
  usePriceRange,
  useSearchTerm,
} from "../redux/features/facilitySlice";
import { useGetAllFacilityQuery } from "../redux/api/facility/facilityApi";

const Facilities = () => {
  const searchTerm = useAppSelector(useSearchTerm);
  const facilityFilter = useAppSelector(usePriceRange);
  const CurrentPage = useAppSelector(useCurrentPage);
  const pageSize = useAppSelector(usePageSize);
  const { data, isFetching } = useGetAllFacilityQuery(undefined);
  const facilities = data?.data;
  console.log(facilities);
  return <div>Facilities</div>;
};

export default Facilities;

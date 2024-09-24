import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  useCurrentPage,
  usePageSize,
  usePriceRange,
  useSearchTerm,
} from "../../redux/features/facilitySlice";
import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import { TFacilities } from "../../types/facility.type";
import FacilitiyList from "./FacilitiyList";
import FacilityFilters from "./FilterFacility";
import FacilitySearch from "./SearchFacility";
import FacilityPagination from "./Pagination";
import { useLocation } from "react-router-dom";

const Facilities = () => {
  const path = useLocation();
  const searchTerm = useAppSelector(useSearchTerm);
  const facilityFilter = useAppSelector(usePriceRange);
  const currentPage = useAppSelector(useCurrentPage);
  const pageSize = useAppSelector(usePageSize);
  const { data, isLoading } = useGetAllFacilityQuery(undefined);
  const facilities = data?.data;
  const [paginatedFacilities, setPaginatedFacilities] = useState([]);

  const filteredFacilities = useMemo(() => {
    return (
      facilities
        ?.filter(
          (facility: TFacilities) =>
            facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            facility.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
          (facility: TFacilities) =>
            facility.pricePerHour >= facilityFilter.priceRange[0] &&
            facility.pricePerHour <= facilityFilter.priceRange[1]
        ) || []
    );
  }, [facilities, searchTerm, facilityFilter]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentFacilities = filteredFacilities?.slice(startIndex, endIndex);
    setPaginatedFacilities(currentFacilities);
  }, [filteredFacilities, currentPage, pageSize]);

  const featuredFacilities = facilities?.slice(0, 4) || [];

  return (
    <div className="mt-16">
      {path.pathname === "/" ? (
        <FacilitiyList
          filteredFacilities={featuredFacilities}
          isLoading={isLoading}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mx-auto container border p-3">
            <FacilitySearch />
            <FacilityFilters />
          </div>
          <FacilitiyList
            filteredFacilities={paginatedFacilities}
            isLoading={isLoading}
          ></FacilitiyList>
          <div className="mt-8">
            <FacilityPagination
              filteredFacilities={filteredFacilities}
            ></FacilityPagination>
          </div>
        </>
      )}
    </div>
  );
};

export default Facilities;

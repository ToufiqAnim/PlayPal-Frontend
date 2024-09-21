import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  useCurrentPage,
  usePageSize,
  usePriceRange,
  useSearchTerm,
} from "../redux/features/facilitySlice";
import { useGetAllFacilityQuery } from "../redux/api/facility/facilityApi";
import { TFacilities } from "../types/facility.type";
import FacilitiyList from "./FacilitiyList";

const Facilities = () => {
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

  return (
    <div className="space-y-8 ">
      {/*     <HeadingComponent
        heading={'Entire Facilities'}
        subHeading={'Discover and book from our selection of entire facilities.'}
    ></HeadingComponent> */}

      {/*   <div className="max-w-7xl mx-auto  flex justify-between items-center">
        <FSearch ></FSearch>
        <FFiliter ></FFiliter>
    </div> */}

      <FacilitiyList
        filteredFacilities={paginatedFacilities}
        isLoading={isLoading}
      ></FacilitiyList>
      {/*     <FacilityPagination filteredFacilities={filteredFacilities}  ></FacilityPagination> */}
    </div>
  );
};

export default Facilities;

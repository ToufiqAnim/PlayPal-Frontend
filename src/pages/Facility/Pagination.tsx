import { Pagination } from "antd";

import React from "react";
import { TFacilities } from "../../types/facility.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setCurrentPage,
  useCurrentPage,
  usePageSize,
} from "../../redux/features/facilitySlice";

type TpaginateProps = {
  filteredFacilities: TFacilities[];
};

const FacilityPagination = ({ filteredFacilities }: TpaginateProps) => {
  const pageSize = useAppSelector(usePageSize);
  const currentPage = useAppSelector(useCurrentPage);
  const dispatch = useAppDispatch();
  const handlePage = (data: number) => {
    dispatch(setCurrentPage(data));
  };

  return (
    <div>
      <Pagination
        align="center"
        onChange={(value) => handlePage(value)}
        pageSize={pageSize}
        defaultCurrent={currentPage}
        total={filteredFacilities?.length}
      />
      ;
    </div>
  );
};

export default FacilityPagination;

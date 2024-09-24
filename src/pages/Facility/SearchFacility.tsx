import { GetProps, Input } from "antd";

import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchTerm } from "../../redux/features/facilitySlice";
const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const FacilitySearch = () => {
  const dispatch = useAppDispatch();

  const handleSearch: SearchProps["onSearch"] = (value) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <div>
      <Search
        placeholder="search here"
        allowClear
        onSearch={handleSearch}
        size="large"
        style={{ width: 400 }}
      />
    </div>
  );
};

export default FacilitySearch;

import {
  Button,
  message,
  Popconfirm,
  PopconfirmProps,
  Space,
  Table,
  TableColumnsType,
} from "antd";

import { Link } from "react-router-dom";

import React from "react";
import {
  useDeleteFacilityMutation,
  useGetAllFacilityQuery,
} from "../../../../redux/api/facility/facilityApi";
import { TFacilities } from "../../../../types/facility.type";

export type TTableData = Pick<
  TFacilities,
  "_id" | "name" | "description" | "image" | "location" | "pricePerHour"
>;

const Facility = () => {
  const { data: allFacily, isFetching } = useGetAllFacilityQuery(undefined);
  const [deleteFacility] = useDeleteFacilityMutation();

  const handleConfirm: PopconfirmProps["onConfirm"] = async (id) => {
    const res = await deleteFacility(id);
    if (res?.data?.success) {
      message.success("Booking Delete Successful");
    } else {
      message.success("Something Went Wrong!");
    }
  };

  const tableData = allFacily?.data?.map(
    ({ _id, name, description, pricePerHour, location }: TTableData) => ({
      key: _id,
      name,
      description,
      pricePerHour,
      location,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Description",
      dataIndex: "description",
      responsive: ["lg"],
    },
    {
      title: "Price PerHour",
      dataIndex: "pricePerHour",
      responsive: ["lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      responsive: ["lg"],
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space size={4}>
            <Link to={item.key}>
              <Button> update</Button>
            </Link>
            <Popconfirm
              title="Delete this facility"
              description="Are you sure to delete this facility?"
              onConfirm={() => handleConfirm(item?.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default Facility;

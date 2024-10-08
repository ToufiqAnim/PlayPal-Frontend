import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentUser } from "../../../../redux/features/authSlice";
import moment from "moment";
import { SmileOutlined, CalendarOutlined } from "@ant-design/icons";

const AdminHeader = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const date = new Date();
  const dateFormat = moment(date).format("MMMM DD, YYYY");

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg rounded-lg mb-6 p-10 md:flex md:justify-between items-center">
      {/* Date Section */}
      <div className="flex items-center mb-4 md:mb-0">
        <CalendarOutlined className="text-2xl mr-3" />
        <p className="text-xl font-medium">{dateFormat}</p>
      </div>

      {/* Welcome Section */}
      <div className="flex items-center">
        <div className="flex items-center text-2xl">
          <SmileOutlined className="text-4xl mr-3" />
          <h1 className="text-4xl font-bold">
            Welcome Back, {currentUser?.name}!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

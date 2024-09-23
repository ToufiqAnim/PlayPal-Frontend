import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentUser } from "../../../../redux/features/authSlice";
import moment from "moment";

const AdminHeader = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const date = new Date();
  const dateFormat = moment(date).format("MMMM DD YYYY");
  return (
    <div className="bg-white shadow-lg rounded-lg  text-gray-800  mb-4 p-10">
      <p className="mb-8">{dateFormat} </p>
      <h1 className="text-4xl my-2">Welcome Back, {currentUser?.name} </h1>
    </div>
  );
};

export default AdminHeader;

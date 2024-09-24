import { UserOutlined, BellOutlined } from "@ant-design/icons";
import { Card, Button, List, Avatar } from "antd";
import { Link } from "react-router-dom";

import React from "react";
import WelcomeHeaderUser from "./UserHeader";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <WelcomeHeaderUser></WelcomeHeaderUser>

      <div className="mb-6">
        <Link to="/user/user-bookings">
          <Button type="primary" className="mr-4">
            My Bookings
          </Button>
        </Link>
        <Link to="#">
          <Button type="default" className="mr-4">
            Edit Profile
          </Button>
        </Link>
        <Link to="#">
          <Button type="default" className="mt-4">
            Change Password
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;

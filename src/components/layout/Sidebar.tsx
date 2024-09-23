import { Layout, Menu } from "antd";

import { Link } from "react-router-dom";

import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { TUser, useCurrentToken } from "../../redux/features/authSlice";
import { USER_ROLE } from "../../constant/UserConstant";
import { adminPaths } from "../../routes/adminRoutes";
import { generateSidebarItems } from "../../utils/GenerateSIdebarItems";

const { Sider } = Layout;

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)?.role) {
    case USER_ROLE.admin:
      sidebarItems = generateSidebarItems(adminPaths, USER_ROLE.admin);

      break;
    case USER_ROLE.user:
      sidebarItems = generateSidebarItems(userPaths, USER_ROLE.user);
      break;
    default:
      break;
  }

  console.log(sidebarItems);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Link to="/">
          <div className="demo-logo h-12 w-full">home</div>
        </Link>
      </div>
      {/* @ts-ignore */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;

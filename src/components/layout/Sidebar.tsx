import { Layout, Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { TUser, useCurrentToken } from "../../redux/features/authSlice";
import { USER_ROLE } from "../../constant/UserConstant";
import { adminPaths } from "../../routes/adminRoutes";
import { generateSidebarItems } from "../../utils/GenerateSIdebarItems";
import { userPaths } from "../../routes/userRoutes";
import { MenuOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  const [isMobile, setIsMobile] = useState(false); // To track screen size

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

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can change the breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdownMenu = <Menu theme="dark" items={sidebarItems} />;

  return (
    <>
      {/* Show Sider for larger screens */}
      {!isMobile ? (
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
              <div className="demo-logo border p-2 rounded w-full font-semibold">
                Home
              </div>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" items={sidebarItems} />
        </Sider>
      ) : (
        // Show Dropdown for mobile screens
        <div style={{ padding: "1rem" }}>
          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <Button icon={<MenuOutlined />} type="primary">
              Menu
            </Button>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default Sidebar;

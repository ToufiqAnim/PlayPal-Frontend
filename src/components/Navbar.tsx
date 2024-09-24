import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { logOut, selectCurrentUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track dropdown state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl">
            Playpal
          </Link>
        </div>

        <div className="flex-none md:hidden">
          <button
            className="btn btn-ghost"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <MenuOutlined className="text-2xl" />
          </button>
        </div>

        {/* Regular menu for larger screens */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/about" className="text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/facility" className="text-lg">
                Facilities
              </Link>
            </li>
            <li>
              {user ? (
                <button className="text-lg" onClick={() => dispatch(logOut())}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="text-lg">
                  Login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <Link to={`${user?.role}/dashboard`} className="text-lg">
                  Dashboard
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100">
          <ul className="menu px-2">
            <li>
              <Link to="/about" className="text-lg" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/facility" className="text-lg" onClick={toggleMenu}>
                Facilities
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  className="text-lg"
                  onClick={() => {
                    dispatch(logOut());
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="text-lg" onClick={toggleMenu}>
                  Login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <Link
                  to={`${user?.role}/dashboard`}
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

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
      <div className="navbar container mx auto bg-base-100 px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          Playpal
        </Link>

        <div className="flex-none md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <MenuOutlined className="text-2xl" />
          </button>
        </div>
        {/* For Larger Screen */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/about"
            className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/facility"
            className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
          >
            Facilities
          </Link>

          {user ? (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition"
              onClick={() => dispatch(logOut())}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-lg">
              Login
            </Link>
          )}

          {user ? (
            <Link
              to={`${user?.role}/dashboard`}
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              Dashboard
            </Link>
          ) : null}
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100">
          <ul className="menu px-4 py-3 space-y-2">
            <li>
              <Link
                to="/about"
                className="text-lg text-gray-700 hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg text-gray-700 hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/facility"
                className="text-lg text-gray-700 hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                Facilities
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  className="text-lg text-red-500 hover:text-red-600 transition"
                  onClick={() => {
                    dispatch(logOut());
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-lg text-indigo-600 hover:text-indigo-700 transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <Link
                  to={`${user?.role}/dashboard`}
                  className="text-lg text-gray-700 hover:text-indigo-600 transition"
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

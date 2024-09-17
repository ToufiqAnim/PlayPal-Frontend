import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl">
            Playpal
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg">About Us</a>
            </li>
            <li>
              <a className="text-lg">Facilities</a>
            </li>
            <li>
              <Link to="/login" className="text-lg">
                Login
              </Link>
            </li>
            {/*      <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Facilities</a>
                  </li>
                  <li>
                    <a>Login</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

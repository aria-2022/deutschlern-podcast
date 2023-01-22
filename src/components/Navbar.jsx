import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <Link to={"/"}>HOME</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/podcast"}>PODCAST</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/aboutus"}>ABOUT US</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/login"}>LOGIN</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/signup"}>SIGN UP</Link>
              </a>
            </li>
          </ul>
        </div>

        <img src="logo.png" className="logo" width={50} />
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          C.LÖWE LOGO
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/podcast"}>PODCAST</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/login"}>LOGIN</Link>
          </li>
          <li>
            <Link to={"/signup"}>SIGN UP</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">CONTACT US</a>
      </div>
    </div>
  );
}

export default Navbar;

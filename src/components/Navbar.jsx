import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
<div className="navbar bg-base-100">

  <div className="navbar-start">


    <Link to={"/"} className="btn btn-ghost normal-case text-xl">C.LÖWE</Link>

  </div>

  <div className="navbar-language">
    <a className="btn">EN</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/"}>HOME</Link></li>
      <li><Link to={"/podcast"}>PODCAST</Link></li>
      <li><Link to={"/aboutus"}>ABOUT US</Link></li>
      <li><Link to={"/login"}>LOGIN</Link></li>
      <li><Link to={"/signup"}>SIGN UP</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
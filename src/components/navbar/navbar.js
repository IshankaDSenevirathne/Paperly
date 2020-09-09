import React, { useEffect, useState } from "react";
import logo from "../../img/logo_transparent.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarwrapper">
      <div className="container">
        <div className="navbar">
          <a className="" href="/">
            <img src={logo} alt="logo"></img>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

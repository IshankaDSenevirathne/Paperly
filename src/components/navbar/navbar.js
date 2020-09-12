import React from "react";
import logo from "../../img/logo_transparent.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#383838" }} id="home">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};
export default Navbar;

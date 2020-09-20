import React from "react";
import logo from "../../img/logo2.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F8F8F8",
        borderBottom: "1px solid #e4e4e4",
      }}
      id="home"
    >
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};
export default Navbar;

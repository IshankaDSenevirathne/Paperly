import React from "react";

import Navigation from "../Navigation/Navigation";
import Categories from "./Subjects/Categories";
import Footer from "../Footer/Footer";
import logo from "../../img/logo_transparent.png";
import HeadLine from "./HeadLine/HeadLine";

export default function Landing() {
  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "#383838" }}>
        <img src={logo} />
      </div>
      <div className="landing"></div>
      <Navigation />
      <div className="content">
        <HeadLine />
        <Categories />
      </div>
      <Footer position="relative" />
    </div>
  );
}

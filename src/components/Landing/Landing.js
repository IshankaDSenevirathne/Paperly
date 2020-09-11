import React from "react";

import Navigation from "../Navigation/Navigation";
import Categories from "./Subjects/Categories";
import logo from "../../img/logo_transparent.png";
import HeadLine from "./HeadLine/HeadLine";

export default function Landing() {
  return (
    <div className="mainconteainer">
      <div className="footerpadding">
        <div className="landing"></div>
        <Navigation />
        <div className="content">
          <HeadLine />
          <Categories />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

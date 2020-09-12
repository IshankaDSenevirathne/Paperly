import React from "react";

import Box from "@material-ui/core/Box";

import Navigation from "../Navigation/Navigation";
import Categories from "./Subjects/Categories";
import HeadLine from "./HeadLine/HeadLine";

export default function Landing() {
  return (
    <div className="mainconteainer">
      <div className="footerpadding">
        <Box display={{ xs: "none", md: "block" }} className="landing"></Box>
        <Navigation />
        <div className="content">
          <HeadLine />
          <Categories />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

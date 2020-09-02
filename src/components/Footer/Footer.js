import React from "react";

import IconButton from "@material-ui/core/IconButton";

import fb from "../../img/icons/facebook.png";
import gmail from "../../img/icons/gmail.png";
import instagram from "../../img/icons/instagram.png";
import twitter from "../../img/icons/twitter.png";
import github from "../../img/icons/github.png";

import logo from "../../img/icons/favicon.png";

export default function Footer() {
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "#383838",
        textAlign: "center",
        paddingBottom: "30px",
        color: "whitesmoke",
      }}
    >
      <div>
        <h1 style={{ paddingTop: "20px" }}>
          <u>CONTACT</u>
        </h1>
      </div>
      <div style={{ textAlign: "center", paddingBottom: "20px" }}>
        <IconButton aria-label="More info">
          <img src={gmail} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={twitter} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={instagram} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={github} />
        </IconButton>
        <IconButton aria-label="More info">
          <img src={fb} />
        </IconButton>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <img src={logo} />
      </div>
    </div>
  );
}

import React from "react";

import IconButton from "@material-ui/core/IconButton";

import fb from "../../img/icons/facebook.png";
import gmail from "../../img/icons/gmail.png";
import instagram from "../../img/icons/instagram.png";
import twitter from "../../img/icons/twitter.png";
import github from "../../img/icons/github.png";

import logo from "../../img/icons/favicon.png";

export default function Footer(props) {
  const pos = props.position;
  console.log(pos);
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "#383838",
        textAlign: "center",
        color: "whitesmoke",
        width: "100%",
        bottom: 0,
        position: `${pos}`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
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

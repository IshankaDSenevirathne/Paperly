import React from "react";

import Sun from "../../../img/sun.png";

export default function HeadLine() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "100px",
        paddingLeft: "15%",
        paddingRight: "15%",
        textTransform: "uppercase",
      }}
    >
      <div
        style={{
          color: "#767676",
        }}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img src={Sun}></img>
        <h3>Quote of the day</h3>
        <h4>
          It’s not that I’m so smart, it’s just that I stay with problems longer
          - Albert Einstein
        </h4>
      </div>
    </div>
  );
}

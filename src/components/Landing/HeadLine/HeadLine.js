import React from "react";

import { Typography } from "@material-ui/core";

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
          color: "#383838",
        }}
      >
        <h3>Quote of the day</h3>
      </div>
      <div style={{ color: "#B2B2B2" }}>
        <h4>
          It’s not that I’m so smart, it’s just that I stay with problems longer
          - Albert Einstein
        </h4>
      </div>
    </div>
  );
}

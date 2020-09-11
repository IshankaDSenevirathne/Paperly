import React from "react";

export default function HeadLine() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "100px",
        textTransform: "uppercase",
      }}
    >
      <div
        data-aos="fade-down"
        style={{
          padding: "20px 20px 20px 20px",
          marginTop: "30px",
          marginBottom: "20px",
          color: "#767676",
        }}
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <h3>
          It’s not that I’m so smart, it’s just that I stay with problems longer
        </h3>
        <br></br> Albert Einstein
      </div>
    </div>
  );
}

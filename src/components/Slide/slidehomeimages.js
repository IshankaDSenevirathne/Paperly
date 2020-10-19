import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import "./Slide.css";


const list = [svg1, svg2, svg3];

const SlideImg = () => {
  const [text, settext] = useState(0);

  return (
    <div
      className=" slide-right-right slider"
      onAnimationIteration={() => {
        console.log("aeaea");
        if (text >= 2) {
          settext(0);
        } else {
          settext(text + 1);
        }
      }}
    >
      <Container
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <img
          style={{
            width: "45%",
            "object-fit": "cover",
          }}
          alt="svg"
          src={list[text]}
        ></img>
      </Container>
    </div>
  );
};

export default SlideImg;

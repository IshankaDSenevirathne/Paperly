import React, { useState } from "react";

import "./Slide.css";

const list = ["Physics", "Biology", "Chemistry"];

const Slide = () => {
  const [text, settext] = useState(0);

  return (
    <div
      className=" slide-right slider"
      onAnimationIteration={() => {
        console.log("aeaea");
        if (text >= 2) {
          settext(0);
        } else {
          settext(text + 1);
        }
      }}
    >
      {list[text]}
    </div>
  );
};

export default Slide;

import React, { useEffect, useState } from "react";
const Quizcard = (props) => {
  return (
    <div>
      {props.question}

      <br></br>

      <ol>
        {props.awnsers.map((ele) => {
          return <li> {ele.value} </li>;
        })}
      </ol>
    </div>
  );
};
export default Quizcard;

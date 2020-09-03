import React, { useEffect, useState } from "react";
import logo from "../../img/logo_transparent.png";
import Quizcard from "../quizcard/quizcard";
import "./questions.css";
var paperData = require("../../paperdata/paperdata.json");

const Questions = (props) => {
  // const [paperId, setpaperId] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    console.log(props.match.params.id);

    let datas = paperData.filter(
      (ele) => ele.paperId === props.match.params.id
    );
    console.log(datas);

    if (datas.length) {
      setdata(datas[0]);
    } else {
      setdata({ paperName: "error paper not found" });
    }

    console.log(data);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "#383838" }}>
        <img alt="logo" src={logo} />
      </div>{" "}
      <h1 className="papername">{data.paperName}</h1>
      <div className="container">
        {data.questions &&
          data.questions.map((ele) => {
            return <Quizcard question={ele.question} awnsers={ele.awnsers} />;
          })}
      </div>
    </div>
  );
};
export default Questions;

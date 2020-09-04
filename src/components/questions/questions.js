import React, { useEffect, useState } from "react";
import logo from "../../img/logo_transparent.png";
import Quizcard from "../quizcard/quizcard";
import "./questions.css";

const Questions = (props) => {
  // const [paperId, setpaperId] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    console.log(props);

    console.log(props.match.params);

    var name = "paperdata";
    let datas = [];
    try {
      var paperData = require(`../../paperdata/${name}.json`);
      datas = paperData.filter((ele) => ele.paperId === props.match.params.id);
      console.log(datas);
    } catch (error) {
      setdata({ paperName: "error paper not found" });
    }

    if (datas.length) {
      setdata(datas[0]);
    } else {
      setdata({ paperName: "error paper not found" });
    }

    // var paperData1 = require("../../paperdata/paperdata");
    // fetch(paperData1)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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

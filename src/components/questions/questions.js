import React, { useEffect, useState } from "react";

import logo from "../../img/logo_transparent.png";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SurveyPages from "../SurveyPages/SurveyPages";

var paperData = require("../../paperdata/paperdata.json");

const Questions = (props) => {
  // const [paperId, setpaperId] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    // console.log(props.match.params.id);

    let datas = paperData.filter(
      (ele) => ele.paperId === props.match.params.id
    );
    if (datas.length) {
      setdata(datas[0].content);
    } else {
      setdata({ paperName: "error paper not found" });
    }
    // console.log(data);
  }, [data]);
  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "#383838" }}>
        <img alt="logo" src={logo} />
      </div>{" "}
      <Navigation />
      <div className="content">
        <SurveyPages paperContent={data} />
      </div>
      <Footer position="fixed" />
    </div>
  );
};
export default Questions;

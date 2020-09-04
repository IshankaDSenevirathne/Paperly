import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SurveyPages from "../SurveyPages/SurveyPages";
import logo from "../../img/logo_transparent.png";
var qs = require("qs");

const Questions = (props) => {
  // const [paperId, setpaperId] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    console.log(props);

    let query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });

    console.log(query);

    try {
      let paperData = require(`../../paperdata/${query.subject}/${query.year}/paper.json`);
      console.log(paperData);
      setdata(paperData.content);
    } catch (error) {
      console.log(error);
      alert(`error ${query.subject} / ${query.year} paper not found`);
    }

    // console.log(data);
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "#383838" }}>
        <img alt="logo" src={logo} />
      </div>{" "}
      {/* <Navigation /> */}
      <div className="content">
        <SurveyPages paperContent={data} />
      </div>
      {/* <Footer position="fixed" /> */}
    </div>
  );
};
export default Questions;

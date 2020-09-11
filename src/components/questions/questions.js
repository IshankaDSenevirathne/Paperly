import React, { useEffect, useState } from "react";
import SurveyPages from "../SurveyPages/SurveyPages";
var qs = require("qs");

const Questions = (props) => {
  // const [paperId, setpaperId] = useState("");
  const [data, setdata] = useState("");

  useEffect(() => {
    console.log(props);

    let query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });

    try {
      let paperData = require(`../../paperdata/${query.subject}/${query.year}/paper.json`);
      console.log(paperData);
      setdata(paperData.content);
    } catch (error) {
      console.log(error);
      alert(`error ${query.subject} / ${query.year} paper not found`);
    }

    console.log(data);
  }, [data]);
  return (
    <div className="mainconteainer">
      <div className="footerpadding">
        <div className="content">
          <SurveyPages paperContent={data} />
        </div>
      </div>
    </div>
  );
};
export default Questions;

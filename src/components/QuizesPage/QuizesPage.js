import React from "react";

import CustomSurvey from "../SurveyPages/CustomSurvey";
import Footer from "../Footer/Footer";
var qs = require("qs");

export default function QuizesPage(props) {
  let query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  let { subject, year } = query;
  let papers = require("../../paperdata/papers.json");

  let sructpaper = papers[subject].map((ele) => ele.name);

  let paperList = ["SELECT PAPER", ...sructpaper];

  console.log(paperList);

  return (
    <>
      <div className="content">
        <div>
          <CustomSurvey papersList={paperList} subject={subject} year={year} />
        </div>
      </div>
      <Footer />
    </>
  );
}

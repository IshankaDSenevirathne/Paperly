import React from "react";

import CustomSurvey from "../SurveyPages/CustomSurvey";

var qs = require("qs");

export default function QuizesPage(props) {
  let query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  let { subject, year } = query;
  let papers = require("../../paperdata/papers.json");
  let paperList = []

  try {
    let sructpaper = papers[subject].map((ele) => ele.name);

    paperList = ["SELECT PAPER", ...sructpaper];

    console.log(paperList);
    console.log(year);
  } catch (error) {
    console.log(error)
    props.history.push("/404");
  }

  return (
    <>
      <div className="content">
        <div>
          <CustomSurvey
            papersList={paperList}
            subject={subject}
            year={year}
          />
        </div>
      </div>
    </>
  );
}

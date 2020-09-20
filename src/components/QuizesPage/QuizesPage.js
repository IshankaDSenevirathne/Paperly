import React from "react";

import CustomSurvey from "../SurveyPages/CustomSurvey";

var qs = require("qs");

export default function QuizesPage(props) {
  let query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  let { subject } = query;
  let papers = require("../../paperdata/papers.json");
  let paperList = papers[subject];
  return (
    <div className="content">
      <div>
        <CustomSurvey papersList={paperList} subject={subject} />
      </div>
    </div>
  );
}

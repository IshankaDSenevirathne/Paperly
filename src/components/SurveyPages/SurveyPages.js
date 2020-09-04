//Importing Survey js library
import * as Survey from "survey-react";
import "survey-react/survey.css";

import React, { Component } from "react";

//Styles for the survey
Survey.StylesManager.applyTheme("modern");

const onComplete = (survey, options) => {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
};
export default function SurveyPages(props) {
  const json = props.paperContent;
  console.log(json);
  var model = new Survey.Model(json);
  return <Survey.Survey model={model} onComplete={onComplete(model)} />;
}

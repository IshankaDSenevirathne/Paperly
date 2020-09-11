//Importing Survey js library
import * as Survey from "survey-react";
import "survey-react/survey.css";

import React from "react";
import "./modern.css";
//Styles for the survey

// var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
// defaultThemeColors["$main-color"] = "#7ff07f";
// defaultThemeColors["$main-hover-color"] = "#6fe06f";
// defaultThemeColors["$text-color"] = "#4a4a4a";
// defaultThemeColors["$header-color"] = "#7ff07f";

// defaultThemeColors["$header-background-color"] = "#4a4a4a";
// defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey.StylesManager.applyTheme("modern");
// Survey.showPreviewBeforeComplete = "showAllQuestions";

// Survey.StylesManager.applyTheme("modern");

const onComplete = (survey) => {
  //Write survey results into database

  console.log(survey);
  console.log();

  var regex = /\d+/g;
  var string = survey.getTimerInfoText();
  var m;
  let timearr = [];
  while ((m = regex.exec(string)) != null) {
    console.log(m[0]);
    timearr.push(m[0]);
  }
  console.log(survey.getTimerInfoText());
  console.log("total time - " + timearr[1]);

  // console.log(parseInt(String(survey.getDisplayTime())));

  let correct = survey.getCorrectedAnswerCount();
  let quizcount = survey.getQuizQuestionCount();
  let mark = Math.round((correct / quizcount) * 100);

  survey.completedHtml =
    "marks " + mark + "%  Total time - " + timearr[1] + "s";

  console.log("Survey results: " + JSON.stringify(survey.data));
};

export default function SurveyPages(props) {
  const json = props.paperContent;
  console.log(json);
  var model = new Survey.Model(json);
  model.showPreviewBeforeComplete = "showAllQuestions";
  model.onAfterRenderQuestion.add(function (survey, options) {
    // console.log(survey);
    // console.log(options.htmlElement);
    // var span = document.createElement("span");
    // var isCorrect = options.question.isAnswerCorrect();
    // span.innerHTML = isCorrect ? "Correct" : "Incorrect";
    // span.style.color = isCorrect ? "green" : "red";
    // var header = options.htmlElement.querySelector("h5");
    // if (!isCorrect) {
    //   header.style.backgroundColor = "salmon";
    //   var radio = options.htmlElement.querySelector(
    //     'input[value="' + options.question.correctAnswer + '"]'
    //   );
    //   if (!!radio) {
    //     radio.parentElement.style.color = "green";
    //   }
    // }
    // header.appendChild(span);
  });
  return <Survey.Survey model={model} onComplete={(a) => onComplete(a)} />;
}

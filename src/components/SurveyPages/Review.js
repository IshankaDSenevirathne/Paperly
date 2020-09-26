import React from "react";

import ResultTemp from "./ResultTemp";
import QnA from "../../img/review.png";

export default function Review(props) {
  const { answers, questions, paper } = props;
  return (
    <div>
      <div style={{ color: "#383838", textTransform: "uppercase" }}>
        <h1>{paper}</h1>
      </div>
      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "20px",
          color: "#383838",
          textAlign: "left",
        }}
      >
        <h4>
          <img src={QnA} style={{ verticalAlign: "middle" }}></img>{" "}
          &nbsp;QUESTIONS AND ANSWERES
        </h4>
      </div>

      {questions.map((question) => {
        const index = questions.indexOf(question);
        const userAnswer = answers[index];
        const correctAnswer = question.correctAnswer;
        const result = correctAnswer == userAnswer;
        return (
          <div
            id={index}
            key={index}
            style={{ borderBottom: "1px solid #D0D3D4" }}
          >
            <ResultTemp
              result={result}
              question={question}
              userAnswer={userAnswer}
              correctAnswer={correctAnswer}
              questionNumber={index + 1}
            />
          </div>
        );
      })}
    </div>
  );
}

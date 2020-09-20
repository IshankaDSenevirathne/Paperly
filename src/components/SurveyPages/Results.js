import React from "react";
import ResultTemp from "./ResultTemp";

export default function Results(props) {
  const { answers, questions, paper } = props;
  console.log(answers);
  return (
    <div>
      <div style={{ color: "#5D6D7E", textTransform: "uppercase" }}>
        <h2>{paper}</h2>
      </div>
      <div style={{ textAlign: "left" }}>
        <h3>Your Results</h3>
      </div>
      <hr></hr>
      {questions.map((question) => {
        const index = questions.indexOf(question);
        const userAnswer = answers[index];
        const correctAnswer = question.correctAnswer;
        const result = correctAnswer == userAnswer;

        return (
          <div key={index}>
            <ResultTemp
              result={result}
              question={question}
              userAnswer={userAnswer}
              correctAnswer={correctAnswer}
              questionNumber={index + 1}
            />
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

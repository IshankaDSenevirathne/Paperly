let data = {
  paperId: "1",
  content: {
    title: "Advanced Level 2019 Physics",
    description:
      "Please take look at the survey title and logo. Test the settings on the right panel ->",
    logo: "https://img.icons8.com/pastel-glyph/344/physics--v1.png",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinish: 7200,
    firstPageIsStarted: true,
    showPrevButton: true,
    startSurveyText: "Start Quiz",
    pages: [
      {
        questions: [
          {
            type: "html",
            html:
              "<p>You are about to start quiz <b>Advanced Level 2019 Physics</b>. <br/>You have 2 hours for the whole paper of 50 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready.</p>",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            title: "1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1",
            choices: [
              "1750-1800",
              "1800-1850",
              "1850-1900",
              "1900-1950",
              "after 1950",
            ],
            correctAnswer: "1850-1900",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            title: "ගුරුත්වාකර්ෂණ නියතය GB මාන දෙනු ලබන්නේ, ",
            choices: ["L’M-'T-", "LM-2", "LPM-zT-I", "L’M'T-2", "LM-1"],
            correctAnswer: "L’M-'T-",
          },
        ],
      },
      {
        questions: [
          {
            type: "radiogroup",
            title: "පහත සඳහන් ඒකක අතුරෙන් මූලික ඒකකයක් නොවන්නේ කුමක් ද?",
            choices: ["m", "j", "cd", "k", "mol"],
            correctAnswer: "m",
          },
        ],
      },
    ],
    completedHtml:
      "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount} {correctedAnswers}/{questionCount*100}  </b>.</h4>",
  },
};

export default data;

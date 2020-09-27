import React, { useState, useEffect } from "react";

import QuizList from "./QuizList";
import QuizTemp from "./QuizTemp";
import Results from "./Results";
import Review from "./Review";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "100px",
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

function getSteps() {
  return ["CHOOSE", "ANSWER", "EVALUATE", "REVIEW"];
}

export default function Steps(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [activePaper, setActivePaper] = useState(undefined);
  const [activeQuestions, setActiveQuestions] = useState(undefined);
  const [activeAnswers, setActiveAnswers] = useState([]);
  const [timeSpentForEach, setTimeSpentForEach] = useState([]);
  const [timeSpent, setTimeSpent] = useState(120 * 60);
  const steps = getSteps();

  const { papersList, subject } = props;

  useEffect(() => {
    if (!activePaper) {
      return;
    }
    //need to load the selected paper
    const regex = /\d+/;
    let year = activePaper.match(regex)[0];
    console.log(year);
    let paper = require(`../../paperdata/${subject}/${year}/paper.json`);
    setActiveQuestions(paper.content.pages);
  }, [activePaper, activeQuestions]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const setPaper = (index) => {
    setActivePaper(papersList[index]);
  };
  const getAnswers = (answers, timeSpentForEach) => {
    // console.log(answers);
    setActiveAnswers(answers);
    setTimeSpentForEach(timeSpentForEach);
  };
  const getTimeSpent = (timeSpent) => {
    // console.log(answers);
    setTimeSpent(timeSpent);
  };
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div className="content">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div>
          {activeStep == 0 && (
            <QuizList papersList={papersList} setPaper={setPaper} />
          )}
        </div>
        <div>
          {activeQuestions && activeStep == 1 && (
            <div>
              <QuizTemp
                getAnswers={getAnswers}
                getTimeSpent={getTimeSpent}
                questions={activeQuestions}
                paper={activePaper}
              />
            </div>
          )}
        </div>
        <div>
          {activeStep == 2 && (
            <Results
              paper={activePaper}
              questions={activeQuestions}
              answers={activeAnswers}
              timeSpent={timeSpent}
            />
          )}
        </div>
        <div>
          {activeStep == 3 && (
            <Review
              paper={activePaper}
              questions={activeQuestions}
              answers={activeAnswers}
              totalTimeSpent={timeSpent}
              timeSpentForEach={timeSpentForEach}
            />
          )}
        </div>
        <div style={{ paddingTop: "30px" }}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Past Paper Completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

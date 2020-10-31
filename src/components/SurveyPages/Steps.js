import React, { useState, useEffect } from "react";

import QuizList from "./QuizList";
import QuizTemp from "./QuizTemp";
import Results from "./Results";
import Review from "./Review";

import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import MenuBook from "@material-ui/icons/MenuBook";
import BorderColor from "@material-ui/icons/BorderColor";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import EmojiObjects from "@material-ui/icons/EmojiObjects";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { lightBlue } from "@material-ui/core/colors";

import CompletedSurvey from "./CompletedSurvey";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "white",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#8DE0FF",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#8DE0FF",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "whitesmoke",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#1B68D6",
    color: "white",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#1fa2ff",
    color: "whitesmoke",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <MenuBook />,
    2: <BorderColor />,
    3: <AssignmentTurnedIn />,
    4: <EmojiObjects />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "100px",
  },
  stepper: {
    color: "white",
    background: "#363f44",
    borderRadius: "3px",
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: "whitesmoke",
    borderColor: "whitesmoke",
    "&:hover": {
      color: "white",
    },
  },
  resetButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
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
}));

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

function getSteps() {
  return [
    "Select a Pastpaper",
    "Answer the questions",
    "Evaluate your answers",
    "Review your results",
  ];
}

export default function Steps(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [activePaper, setActivePaper] = useState(undefined);
  const [activeQuestions, setActiveQuestions] = useState(undefined);
  const [activeAnswers, setActiveAnswers] = useState([]);
  const [timeSpentForEach, setTimeSpentForEach] = useState([]);
  const [timeSpent, setTimeSpent] = useState(120 * 60);
  const [checkLast, setCheckLast] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [paperYear, setpaperYear] = useState(0);

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
    setpaperYear(year);
    // let paper = require(`../../paperdata/${subject}/${year}/paper.json`);

    let papar = require(`../../paperdata/${subject}/${year}/paper`);

    console.log(papar.default.content);
    // console.log(paper);

    setActiveQuestions(papar.default.content.pages);
  }, [activePaper, activeQuestions]);
  const handleNext = () => {
    if (activePaper == undefined) {
      setOpen(true);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    if (activeStep - 1 == 0) {
      setActivePaper(undefined);
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActivePaper(undefined);
    setActiveStep(0);
    setActiveAnswers([]);
    setActiveQuestions(undefined);
    setActiveAnswers([]);
    setTimeSpentForEach([]);
    setTimeSpent(120 * 60);
    setCheckLast(false);
  };

  const setPaper = (index) => {
    setActivePaper(papersList[index]);
  };
  const getAnswers = (answers, timeSpentForEach, checkLast) => {
    setCheckLast(checkLast);
    setActiveAnswers(answers);
    setTimeSpentForEach(timeSpentForEach);
  };
  const getTimeSpent = (timeSpent) => {
    setTimeSpent(timeSpent);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Hidden xsDown>
          <div className="stepbar">
            <Stepper
              className={classes.stepper}
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {activeStep == steps.indexOf(label) && (
                      <span style={{ color: "#1fa2ff" }}>{label}</span>
                    )}
                    {activeStep != steps.indexOf(label) && (
                      <span style={{ color: "whitesmoke" }}>{label}</span>
                    )}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </Hidden>

        <div>
          {activeStep == 0 && (
            <QuizList
              subject={subject}
              papersList={papersList}
              setPaper={setPaper}
            />
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
              paperName={subject}
              paperYear={paperYear}
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
              <CompletedSurvey />
              <Button
                variant="contained"
                color="primary"
                className={classes.resetButton}
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  disabled={activeStep === 0 || activeStep == 2}
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
                  disabled={activeStep == 1 && !checkLast}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <MuiAlert elevation={6} variant="filled" severity="error">
            Please select an exam!
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
}

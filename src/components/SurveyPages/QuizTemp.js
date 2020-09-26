import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Timer from "./Timer/Timer";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function QuizTemp(props) {
  const classes = useStyles();

  const answersHolder = ["", "", ""];

  const { paper, questions, getAnswers, getTimeSpent } = props;
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState(answersHolder);
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverityType] = React.useState("info");
  const [alert, setAlertText] = React.useState("Please select an option!");

  const handleRadioChange = (event) => {
    const answer = event.target.value;
    setValue(answer);
    setAnswers((answers) => {
      answers[activeQuestion] = answer;
      return answers;
    });
  };
  React.useEffect(() => {
    getAnswers(answers);
  }, [answers, getAnswers]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setOpen(true);
      setSeverityType("info");
      setAlertText("Please select an option!");
    } else if (value === questions[activeQuestion].correctAnswer) {
      setOpen(true);
      setSeverityType("success");
      setAlertText("Your answer is correct!");
    } else if (value && value !== questions[activeQuestion].correctAnswer) {
      setOpen(true);
      setSeverityType("error");
      setAlertText("Sorry, your answer is incorrect!");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
      return;
    }

    setOpen(false);
  };
  const handlePageChange = (event, page) => {
    const q = page - 1;
    setValue(null);
    setActiveQuestion(q);
  };

  return (
    <div>
      <div style={{ color: "#616A6B", textTransform: "uppercase" }}>
        <h1>{paper}</h1>
      </div>
      <div style={{ textAlign: "left" }}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" className={classes.formControl}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <FormLabel component="legend">
                <Timer getTimeSpent={getTimeSpent} />

                <h3>
                  {activeQuestion + 1} ) {questions[activeQuestion].title}
                </h3>
              </FormLabel>
            </Grid>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value={questions[activeQuestion].choices[0]}
                control={<Radio color="primary" />}
                label={questions[activeQuestion].choices[0]}
              />
              <FormControlLabel
                value={questions[activeQuestion].choices[1]}
                control={<Radio color="primary" />}
                label={questions[activeQuestion].choices[1]}
              />
              <FormControlLabel
                value={questions[activeQuestion].choices[2]}
                control={<Radio color="primary" />}
                label={questions[activeQuestion].choices[2]}
              />
              <FormControlLabel
                value={questions[activeQuestion].choices[3]}
                control={<Radio color="primary" />}
                label={questions[activeQuestion].choices[3]}
              />
              <FormControlLabel
                value={questions[activeQuestion].choices[4]}
                control={<Radio color="primary" />}
                label={questions[activeQuestion].choices[4]}
              />
            </RadioGroup>
            <br></br>
            <FormHelperText>Review your answer now</FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>
          </FormControl>
        </form>
      </div>
      <div>
        <hr></hr>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.root}>
            <Pagination
              count={50}
              showFirstButton
              showLastButton
              siblingCount={2}
              variant="outlined"
              color="primary"
              onChange={handlePageChange}
              defaultPage={1}
            />
          </div>
        </Grid>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={severity}>
          {alert}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

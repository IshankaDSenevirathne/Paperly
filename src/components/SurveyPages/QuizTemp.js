import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
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

import marked from "marked";
import DOMPurify from "dompurify";

marked.setOptions({ gfm: true });

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  button: {
    width: "200px",
    margin: theme.spacing(1, 1, 0, 0),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  radio: {
    color: "white",
  },

  pagination: {
    "& .MuiPaginationItem-root": {
      color: "white",
    },
  },
}));

export default function QuizTemp(props) {
  const classes = useStyles();

  const { paper, questions, getAnswers, getTimeSpent,timeForPaper } = props;
  const answersHolder = Array.from({ length: questions.length }, (_, i) => 0); 
  const timeHolder = Array.from({ length: questions.length }, (_, i) => 0); 
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState(answersHolder);
  const [timeSpent, setTimeSpent] = React.useState(timeHolder);
  const [startingTime, setStartingTime] = React.useState(new Date().getTime());
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [lastQuestion,setLastQuestion]= React.useState(0);
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
    let unansweredQ = [];
    answers.forEach((answer,index)=>{
      if(answer===0){
        unansweredQ.push(index+1);
      }
    });
    getAnswers(answers, timeSpent,unansweredQ,lastQuestion);
  }, [...answers,lastQuestion]);
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const userAnswer = parseInt(value);
    if (!value) {
      setOpen(true);
      setSeverityType("info");
      setAlertText("Please select an option!");
    } else if (userAnswer === questions[activeQuestion].correctAnswer) {
      setOpen(true);
      setSeverityType("success");
      setAlertText("Your answer is correct!");
    } else if (
      value &&
      userAnswer !== questions[activeQuestion].correctAnswer
    ) {
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
  const handlePageChange = (event,page) => {
    const q = page - 1;
    const endingTime = new Date().getTime();
    setTimeSpent((timeSpent) => {
      const timeDiffInSec = Math.round((endingTime - startingTime) / 1000) % 60;
      timeSpent[activeQuestion] =
        parseInt(timeSpent[activeQuestion]) + parseInt(timeDiffInSec);
      return timeSpent;
    });
    setLastQuestion(q);
    setActiveQuestion(q);
    if (answers[q] !== "") {
      setValue(answers[q]);
    } else {
      setValue(null);
    }
    setStartingTime(endingTime);
  };
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          color: "#1fa2ff",
          textTransform: "uppercase",
          paddingTop: "60px",
          paddingBottom: "20px",
        }}
      >
        <Typography align="center" variant="h5">{paper}</Typography>
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
                <Timer timeForPaper={timeForPaper} getTimeSpent={getTimeSpent} />
                <div style={{ color: "white" }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        marked(questions[activeQuestion].title)
                      ),
                    }}
                  />
                </div>
              </FormLabel>
            </Grid>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={parseInt(value)}
              onChange={handleRadioChange}
            >
              {questions[activeQuestion].choices.map((ele, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={ele.id}
                    data-cy={ele.id}
                    control={
                      <Radio color="primary" className={classes.radio} />
                    }
                    label={
                      <>
                        <div style={{ color: "white" }}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(marked(ele.text)),
                            }}
                          />
                        </div>
                      </>
                    }
                  />
                );
              })}
            </RadioGroup>
            <br></br>
            <FormHelperText>
              <span style={{ color: "white" }}>Review your answer now</span>
            </FormHelperText>
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
        <Grid container  direction="row" justify="center" alignItems="center">
            <Button disabled={activeQuestion===0} onClick={()=>handlePageChange("",activeQuestion)} color="primary" data-cy="prev" >
              Prev
            </Button>
            <Button disabled={activeQuestion===questions.length-1} onClick={()=>handlePageChange("",activeQuestion+2)} color="primary" data-cy="next" >
              Next
            </Button>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.root}>
            <Pagination
              count={questions.length}
              showFirstButton
              showLastButton
              page={activeQuestion+1}
              color="primary"
              className={classes.pagination}
              siblingCount={2}
              onChange={handlePageChange}
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

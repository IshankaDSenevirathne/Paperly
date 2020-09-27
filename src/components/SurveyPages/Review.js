import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import ResultTemp from "./ResultTemp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "400px",
  },
  item: {
    border: "1px solid #4199FF",
    borderRadius: "8px",
    color: "#4199FF",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#EDF5FF",
      border: "1px solid #1fa2ff",
    },
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const options = ["Show All", "Show Correct", "Show Incorrect"];

export default function Review(props) {
  const { answers, questions, paper, timeSpentForEach, totalTimeSpent } = props;
  const classes = useStyles();
  const timeForLastQuestion = (totalTimeElapsed) => {
    const elapsedTime = 120 * 60 - totalTimeElapsed;
    let totalTime = 0;
    for (var i = 0; i < timeSpentForEach.length - 1; i++) {
      console.log(timeSpentForEach[i]);
      totalTime = totalTime + parseInt(timeSpentForEach[i]);
    }
    console.log(elapsedTime - totalTime);
    const timeforlastquestion = elapsedTime - totalTime;
    if (timeforlastquestion == NaN) {
      return 0;
    } else {
      return timeforlastquestion;
    }
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          color: "#616A6B",
          textTransform: "uppercase",
          paddingTop: "60px",
        }}
      >
        <h1>{paper}</h1>
      </div>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            color: "#616A6B",
            textAlign: "left",
          }}
        >
          <h3>REVIEW RESULTS</h3>
        </div>
        <div className={classes.root}>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="Filter"
              onClick={handleClickListItem}
              className={classes.item}
            >
              <ListItemText
                primary="FILTER"
                secondary={options[selectedIndex]}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <div>
        {questions.map((question) => {
          const index = questions.indexOf(question);
          const userAnswer = answers[index];
          const correctAnswer = question.correctAnswer;
          const result = correctAnswer == userAnswer;
          let timeSpent = 0;
          if (index == 2) {
            timeSpent = timeForLastQuestion(totalTimeSpent);
          } else {
            timeSpent = timeSpentForEach[index];
          }
          let hours = Math.floor(timeSpent / 3600);
          const spentHours = hours * 60;
          let minutes = Math.floor(timeSpent / 60 - spentHours);
          let seconds = timeSpent % 60;
          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          if (selectedIndex == 0) {
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
                <p className="timeforquestion">
                  {hours} : {minutes} : {seconds}
                </p>
              </div>
            );
          } else if (selectedIndex == 1 && result == true) {
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
                <p className="timeforquestion">
                  {hours} : {minutes} : {seconds}
                </p>
              </div>
            );
          } else if (selectedIndex == 2 && result == false) {
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
                <p className="timeforquestion">
                  {hours} : {minutes} : {seconds}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

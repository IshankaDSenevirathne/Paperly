import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import Timer from "@material-ui/icons/Timer";

import ResultTemp from "./ResultTemp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: theme.palette.background.paper,
    // maxWidth: "200px",
    // minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // minHeight: "100vh",
    // position: "fixed",
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
  },
  rootsroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    console.log("go to tp");
    console.log(anchor);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.rootsroll}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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
    console.log(totalTime);
    console.log(elapsedTime);
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
    <div className={classes.root}>
      <CssBaseline />
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
              <ListItemText primary={options[selectedIndex]} />
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
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Timer />
                    &nbsp;
                    {hours} : {minutes} : {seconds}
                  </span>
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
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Timer />
                    &nbsp;
                    {hours} : {minutes} : {seconds}
                  </span>
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
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Timer /> &nbsp;
                    {hours} : {minutes} : {seconds}
                  </span>
                </p>
              </div>
            );
          }
        })}
      </div>{" "}
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#1fa2ff" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon style={{ color: "#ffffff" }} />
        </Fab>
      </ScrollTop>
    </div>
  );
}

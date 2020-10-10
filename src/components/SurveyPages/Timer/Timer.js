import React, { useState, useEffect } from "react";
import "./style.css";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
  alertBox:{
    background:"#2a3136",
    color:"whitesmoke"
  }
})) 

export default function Timer(props) {
  const { getTimeSpent } = props;
  const [time, setTime] = useState(120 * 60);
  const classes=useStyles();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    getTimeSpent(time);
    return () => clearInterval(interval);
  }, [time]);
  const countdown = () => {
    let hours = Math.floor(time / 3600);
    const spentHours = hours * 60;
    let minutes = Math.floor(time / 60 - spentHours);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (time <= 0) {
      hours = "0" + 0;
      minutes = "0" + 0;
      seconds = "0" + 0;
    }
    return (
      <div>
        <p className="countdownTimer">
          {hours} : {minutes} : {seconds}
        </p>
        {time > 0 && (
          <Alert severity="info">
            <AlertTitle>Hint</AlertTitle>
            Complete answering the paper within the given amount of time and
            {"  "}
            <strong>Click Next to evaluate your answers.</strong>
          </Alert>
        )}
        {time <= 0 && (
          <Alert severity="warning" classes={{root:classes.alertBox}} variant="outlined">
            <AlertTitle>Your time is up!</AlertTitle>
            You can keep answering the paper —{" "}
            <strong>Click Next after you finished answering.</strong>
          </Alert>
        )}
      </div>
    );
  };
  return <div>{countdown()}</div>;
}

import React, { useState, useEffect } from "react";
import AnimatedNumber from "animated-number-react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    width: 200,
    textAlign: "center",
    // position: "sticky",
    background: "#1fa2ff",
    color: "#ffffff",
  },
  statbar: {
    padding: "3rem",
    // backgroundImage: `${gradientstatbar}`,
    // background: "rgb(245, 245, 245)",
    backgroundColor: "#2a3136",
  },
  statbartext: {
    textTransform: "capitalize",
    // text-transform: uppercase;
  },
}));

const formatValue = (value) => value.toFixed(0);

const Statsbar = (props) => {
  const classes = useStyles();
  const [submissions, setsubmissions] = useState(0);

  useEffect(() => {
    fetch("https://paperly-114b9e.us1.kinto.io/landingstats/getstats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status === "success") {
          setsubmissions(data.submissions);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid className={classes.statbar} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing="6">
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span className={classes.statbartext}>Currently servers</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={12}
                    duration={2000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span className={classes.statbartext}>Past papers</span>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span className={classes.statbartext}>Including</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={6}
                    duration={2000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span className={classes.statbartext}>subjects</span>
              </div>
            </Paper>
          </Grid>{" "}
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span className={classes.statbartext}>Past papers in</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={20}
                    duration={2000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span className={classes.statbartext}>Years</span>
              </div>
            </Paper>
          </Grid>{" "}
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span className={classes.statbartext}>corrected </span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={submissions}
                    duration={2000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}
                <span className={classes.statbartext}>questions</span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Statsbar;

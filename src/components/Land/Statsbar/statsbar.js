import React from "react";
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
    background: "rgb(245, 245, 245)",
  },
}));

const formatValue = (value) => value.toFixed(0);

const Statsbar = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.statbar} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing="6">
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span>Currently servers</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={12}
                    delay={1000}
                    duration={3000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span>Past papers</span>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span>Including</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={6}
                    delay={1000}
                    duration={3000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span>subjects</span>
              </div>
            </Paper>
          </Grid>{" "}
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                <span>Past papers in</span>
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={20}
                    delay={1000}
                    duration={3000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}{" "}
                <span>Years</span>
              </div>
            </Paper>
          </Grid>{" "}
          <Grid item>
            <Paper className={classes.paper}>
              <div className="stattable">
                {props.counterVisible ? (
                  <AnimatedNumber
                    value={10000}
                    duration={3000}
                    formatValue={formatValue}
                  />
                ) : (
                  ""
                )}

                <span>questions</span>
                <span>corrected</span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Statsbar;

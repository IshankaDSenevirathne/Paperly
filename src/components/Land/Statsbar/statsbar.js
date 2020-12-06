import React, { useState, useEffect } from "react";
import AnimatedNumber from "animated-number-react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import wave from "../../../img/wavestop.svg";

// const API =
//   process.env.NODE_ENV === "production"
//     ? `https://paperly-114b9e.us1.kinto.io`
//     : "http://localhost:5000";

const API = `https://paperly-114b9e.us1.kinto.io`;

const useStyles = makeStyles((theme) => ({
  statbar: {
    padding: "3rem",
    // backgroundImage: `${gradientstatbar}`,
    // background: "rgb(245, 245, 245)",
    backgroundColor: "#ffffff",
    color: "black",
    minHeight: "300px",
    backgroundImage: `url(${wave})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  statbartext: {
    textTransform: "uppercase",
    color: "#515A5A",
    // text-transform: uppercase;
  },
}));

const formatValue = (value) => value.toFixed(0);

const Statsbar = (props) => {
  const classes = useStyles();
  const [submissions, setsubmissions] = useState(0);

  useEffect(() => {
    fetch(`${API}/landingstats/getstats`)
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
    <Grid container direction="row" className={classes.statbar}>
      <Grid item xs={12} sm={3}>
        <div id="statistics" className="stattable">
          {props.counterVisible ? (
            <Typography variant="h2" gutterBottom align="center">
              <AnimatedNumber
                value={12}
                duration={1000}
                formatValue={formatValue}
              />
            </Typography>
          ) : (
            ""
          )}{" "}
          <span className={classes.statbartext}>Past papers</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div className="stattable">
          {props.counterVisible ? (
            <Typography variant="h2" gutterBottom align="center">
              <AnimatedNumber
                value={6}
                duration={1000}
                formatValue={formatValue}
              />
            </Typography>
          ) : (
            ""
          )}{" "}
          <span className={classes.statbartext}>subjects</span>
        </div>
      </Grid>{" "}
      <Grid item xs={12} sm={3}>
        <div className="stattable">
          {props.counterVisible ? (
            <Typography variant="h2" gutterBottom align="center">
              <AnimatedNumber
                value={20}
                duration={1000}
                formatValue={formatValue}
              />
            </Typography>
          ) : (
            ""
          )}{" "}
          <span className={classes.statbartext}>Years of exams</span>
        </div>
      </Grid>{" "}
      <Grid item xs={12} sm={3}>
        <div className="stattable">
          {props.counterVisible ? (
            <Typography variant="h2" gutterBottom align="center">
              <AnimatedNumber
                value={submissions}
                duration={1000}
                formatValue={formatValue}
              />
            </Typography>
          ) : (
            ""
          )}
          <span className={classes.statbartext}>Submissions</span>
        </div>
      </Grid>
    </Grid>
  );
};
export default Statsbar;

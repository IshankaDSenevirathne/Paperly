import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Image Files

import Evaluation from "../../../img/Evaluation-2.svg";
import Reviews from "../../../img/Reviews-2.svg";
import Timing from "../../../img/Timing-2.svg";
import Subjects from "../../../img/Subjects-2.svg";

const styles = makeStyles((theme) => ({
  item1: {
    order: 1,
    [theme.breakpoints.down("xs")]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down("xs")]: {
      order: 1,
    },
  },
  images: {
    width: "100%",
  },
}));

export default function StepGuide() {
  const classes = styles();
  return (
    <div id="features">
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img alt="hero1" className={classes.images} src={Subjects} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm justify="center">
            <div>
              <Typography gutterBottom variant="h6" align="center">
                <b>CURRENTLY SUPPORTS SIX SUBJECTS </b>
              </Typography>

              <Typography gutterBottom variant="subtitle1" align="center">
                You have access to all the past papers under thes subjects
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm
            container
            justify="center"
            className={classes.item1}
          >
            <Grid item>
              <div>
                <Typography gutterBottom variant="h6" align="center">
                  <b>WE WILL TIME YOUR ATTEMP</b>
                </Typography>

                <Typography gutterBottom variant="subtitle1" align="center">
                  Your attempt will be timed and the individual time taken for
                  each question will be also displayed under Reviews
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.item2}
            sm
          >
            <div>
              <img alt="hero2" className={classes.images} src={Timing} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img alt="hero3" className={classes.images} src={Evaluation} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm justify="center">
            <div >
              <Typography gutterBottom variant="h6" align="center">
                <b>YOUR ANSWER SCRIPTS WILL BE VERIFIED IN REAL TIME</b>
              </Typography>

              <Typography gutterBottom variant="subtitle1" align="center">
                You will be able to get results and an analysis of your answers
                instantly after finishing the quiz.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm
            container
            justify="center"
            className={classes.item1}
          >
            <Grid item>
            <div>
              <Typography gutterBottom variant="h6" align="center">
                <b>REVIEW ANSWERS RIGHT AFTER ANSWERING</b>
              </Typography>

              <Typography gutterBottom variant="subtitle1" align="center">
                A review for each question will be provided at the end.
              </Typography>
            </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            sm
            className={classes.item2}
          >
            <div>
              <img alt="hero4" className={classes.images} src={Reviews} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

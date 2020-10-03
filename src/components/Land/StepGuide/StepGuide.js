import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Image Files

import Evaluation from "../../../img/Evaluation-2.png";
import Reviews from "../../../img/Reviews-2.png";
import Timing from "../../../img/Timing-2.png";
import Subjects from "../../../img/Subjects-2.png";

export default function StepGuide() {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "40px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img src={Subjects} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm>
            <Typography gutterBottom variant="h6">
              <b>CURRENTLY SUPPORTS SIX SUBJECTS </b>
            </Typography>

            <Typography gutterBottom variant="subtitle1">
              You have access to all the past papers under thes subjects
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm container justify="center">
          <Grid item>
            <Typography gutterBottom variant="h6">
              <b>WE WILL TIME YOUR ATTEMP</b>
            </Typography>

            <Typography gutterBottom variant="subtitle1">
              Your attempt will be timed and the individual time taken for each
              question will be also displayed under Reviews
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm>
          <div>
            <img src={Timing} />
          </div>
        </Grid>
      </Grid>
      <div style={{ marginBottom: "40px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img src={Evaluation} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm>
            <Typography gutterBottom variant="h6">
              <b>YOUR ANSWER SCRIPTS WILL BE VERIFIED IN REAL TIME</b>
            </Typography>

            <Typography gutterBottom variant="subtitle1">
              You will be able to get results and an analysis of your answers
              instantly after finishing the quiz.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm container justify="center">
          <Grid item>
            <Typography gutterBottom variant="h6">
              <b>REVIEW ANSWERS RIGHT AFTER ANSWERING</b>
            </Typography>

            <Typography gutterBottom variant="subtitle1">
              A review for each question will be provided at the end.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm>
          <div>
            <img src={Reviews} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

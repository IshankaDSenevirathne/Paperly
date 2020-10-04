import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./cardtile.css";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "20px 20px 20px 20px",
    padding: "20px 20px 20px 20px",
  },
});

export default function CardTile({ image, title, link, delay }) {
  const classes = useStyles();
  return (
    <Grid item sm={12} xs={12} md={12} lg={4}>
      <div>
        <div className="tile">
          <Link to={`/quizes?subject=${link}`} className="tile_link">
            <Paper className={classes.root} elevation={2}>
              <img src={image} className="tile_img"></img>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </Paper>
          </Link>
        </div>
      </div>
    </Grid>
  );
}

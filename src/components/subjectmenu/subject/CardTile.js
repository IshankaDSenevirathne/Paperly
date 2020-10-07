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
    background: "#363f44",
  },
});

export default function CardTile({ image, title, link, delay }) {
  const classes = useStyles();
  return (
    <Grid item sm={12} xs={12} md={12} lg={4}>
      <div>
        <Link to={`/quizes?subject=${link}`} className="tile_link">
          <div className="tile">
            <div className="wave"></div>
          </div>
        </Link>
      </div>
    </Grid>
  );
}

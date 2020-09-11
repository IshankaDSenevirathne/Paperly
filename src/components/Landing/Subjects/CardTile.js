import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "20px 20px 20px 20px",
  },
  content: {
    minHeight: 100,
  },
  action: {
    textAlign: "center",
  },
});

export default function CardTile({
  image,
  imageTitle,
  title,
  link,
  delay,
  description,
}) {
  const classes = useStyles();
  return (
    <Grid item sm={12} xs={12} md={12} lg={4}>
      <div
        data-aos="fade-down"
        data-aos-delay={delay}
        data-aos-duration={"800"}
      >
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <img src={image}></img>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/quizes?subject=${link}`}>
              <IconButton color="primary" aria-label="Visit">
                <ArrowForwardIos />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
}

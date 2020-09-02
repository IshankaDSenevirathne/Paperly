import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import LinkIcon from "@material-ui/icons/OpenInNew";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "10px 5px 10px 5px",
  },
  media: {
    height: 250,
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
          <CardMedia
            className={classes.media}
            image={image}
            title={imageTitle}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton color="primary" aria-label="Visit">
              <ArrowForwardIos />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
}

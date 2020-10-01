import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
const cover1 = require("../../../img/cover1.PNG");
const cover2 = require("../../../img/cover2.PNG");
const cover3 = require("../../../img/cover3.PNG");
const cover4 = require("../../../img/cover4.PNG");

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "200vh",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },

  card: {
    display: "flex",
    height: "40vh",
  },
  cardDetails: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  },
  cardMedia: {
    width: "50%",
  },
  maincard: {
    display: "flex",
  },
  image: {
    objectFit: "cover",
    width: "50px",
    height: "100px",
  },
});

export default function Screenshot() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <CardActionArea component="div">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <Typography component="h2" variant="h5">
                    Select
                  </Typography>
                  <Typography component="h2" variant="h5">
                    {/* Step by Step */}
                    {"\n "}
                    <br></br>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Select a question paper from variety of our question paper
                    range
                  </Typography>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    src={cover1}
                    image={cover1}
                    // image="https://i.pinimg.com/564x/0d/1a/41/0d1a4116f2d514c47ff97babf8bcc9c9.jpg"
                    title="sasas"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} md={12}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cover2}
                    title="sasas"
                  />
                </Hidden>
                <div className={classes.cardDetails}>
                  <Typography component="h2" variant="h5">
                    Start
                  </Typography>
                  <Typography component="h2" variant="h5">
                    {/* Step by Step */}
                    {"\n "}
                    <br></br>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Start awnsering question paper on the given time
                  </Typography>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} md={12}>
            <CardActionArea component="div">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <Typography component="h2" variant="h5">
                    Submit
                  </Typography>
                  <Typography component="h2" variant="h5">
                    {/* Step by Step */}
                    {"\n "}
                    <br></br>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Submit you awnsers and correct them real time. get your
                    marks instantly
                  </Typography>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cover3}
                    // image="https://i.pinimg.com/564x/0d/1a/41/0d1a4116f2d514c47ff97babf8bcc9c9.jpg"
                    title="sasas"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} md={12}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cover4}
                    title="sasas"
                  />
                </Hidden>
                <div className={classes.cardDetails}>
                  <Typography component="h2" variant="h5">
                    Review
                  </Typography>
                  <Typography component="h2" variant="h5">
                    {/* Step by Step */}
                    {"\n "}
                    <br></br>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Review your awnsers to learn what whent wrong
                  </Typography>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>{" "}
    </Container>
  );
}

/**
 *    {/* <Grid xs="0" md="3">
          {" "}
          <span>daadasasd</span>
       
        </Grid> */
/* </Grid> */
/* <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
           
            <Typography variant="subtitle1" color="textSecondary">
             our intutive new way
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://i.pinimg.com/564x/0d/1a/41/0d1a4116f2d514c47ff97babf8bcc9c9.jpg"
          title="Live from space album cover"
        />
      </Card> */

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

// export default function MediaControlCard() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
// <Card className={classes.root}>
//   <div className={classes.details}>
//     <CardContent className={classes.content}>
//       <Typography component="h5" variant="h5">
//         Live From Space
//       </Typography>
//       <Typography variant="subtitle1" color="textSecondary">
//         Mac Miller
//       </Typography>
//     </CardContent>
//     <div className={classes.controls}>
//       <IconButton aria-label="previous">
//         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//       </IconButton>
//       <IconButton aria-label="play/pause">
//         <PlayArrowIcon className={classes.playIcon} />
//       </IconButton>
//       <IconButton aria-label="next">
//         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//       </IconButton>
//     </div>
//   </div>
//   <CardMedia
//     className={classes.cover}
//     image="/static/images/cards/live-from-space.jpg"
//     title="Live from space album cover"
//   />
// </Card>
//   );
// }

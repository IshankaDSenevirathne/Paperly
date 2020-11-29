import React, { useState } from "react";
import Link from "@material-ui/core/Link";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./Landing.css";
import VisibilitySensor from "react-visibility-sensor";
import Statsbar from "./Statsbar/statsbar";
import Quote from "./Quote/Quote";
import BannerHome from "./BannerHome/BannerHome";

import PropTypes from "prop-types";

import StepGuide from "./StepGuide/StepGuide";
import Banner from "./Banner/Banner";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import Check from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    backgroundColor: "#2a3136",
    color: "white",
  },
  rootsroll: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: "15px",
  },
  botBanner: {
    minHeight: "300px",
  },
  statbar: {
    padding: "3rem",
    background: "rgb(245, 245, 245)",
  },
  snackbar:{
    background:"#ffffff",
    color:"#363f44"
  },
  cookieButton:{
    color:"#D0D3D4",
    transition:"0.3s easeOut",
    "&:hover":{
      color:"#1fa2ff"
    }
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    console.log("go to tp");
    console.log(anchor);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.rootsroll}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function Album(props) {
  const classes = useStyles();
  const [counterVisible, setcounterVisible] = useState(false);
  const [cookieBanner, setcookieBanner] = useState(true);

  const handlecookieBannerClose = () => {
    setcookieBanner(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div id="back-to-top-anchor"></div>
      <BannerHome />
      <Banner />
      <Container maxWidth="lg">
        <div style={{ paddingTop: "100px" }}>
          <StepGuide />
        </div>
      </Container>
      <div></div>{" "}
      <VisibilitySensor
        onChange={(e) => {
          if (e) {
            setcounterVisible(true);
          }
        }}
      >
        <div className="scrollvisibile"></div>
      </VisibilitySensor>
      <Quote />
      <Statsbar counterVisible={counterVisible} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.botBanner}
      >
        <Grid item>
          <Typography variant="h5" align="center">
            READY TO JUMP IN ?
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <Typography gutterBottom variant="subtitle1" align="center">
              <Link
                href="/subjectmenu"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="contained" color="primary" size="large">
                  GET STARTED
                </Button>
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#1fa2ff" }}
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon style={{ color: "#ffffff" }} />
        </Fab>
      </ScrollTop>
       

          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={cookieBanner}
          autoHideDuration={1000000}
          ContentProps={{className:classes.snackbar}}
          message={
            <div style={{display:"flex",alignItems:"center"}}>
              <div style={{textAlign:"center"}}>
                <svg  width="70px" height="70px" viewBox="0 0 500 501.52"><title>Paperly (11)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g><path d="M376.83,150a10,10,0,0,0-5.09-8.3l-5.3-2.52-.21-.11s-2.39-1.15-5.31-2.54L187.42,54.05c-2.93-1.39-3.59-.52-1.47,1.92l79.45,91.94a33.7,33.7,0,0,0,9.16,7l53.88,25.6c2.92,1.39,5.31,2.54,5.3,2.56s2.37,1.16,5.29,2.55l22.77,10.84L372,201.27c2.67,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#363f44"}}/></g><g><path d="M189.08,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,1.95,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#363f44"}}/></g><g ><path d="M380.85,141.22c0-3.7-2.68-5.32-6-3.61L125.08,267.92c-3.27,1.71-3.4,4.73-.29,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L374.92,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>   
              </div>
              <div>
                <Typography variant="subtitle1">
                  <b>Why we use cookies ?</b>
                </Typography>
                <Typography variant="subtitle2">
                  Paperly use cookies to deliver and improve the website experience. See our cookie policy for further details on how we use cookies and how to change your cookie settings.
                </Typography>
                <div style={{textAlign:"right"}}>
                <IconButton size="small" aria-label="accept" onClick={handlecookieBannerClose}>
                  <Check fontSize="large" className={classes.cookieButton}/>
                </IconButton>
              </div>
              </div>
            </div>
          }
        />
    </div>
  );
}

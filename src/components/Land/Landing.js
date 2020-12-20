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

import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
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
                <Button variant="contained" color="primary" size="large" data-cy="getstarted">
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
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={cookieBanner}
        autoHideDuration={1000000}
      >
        <Collapse in={cookieBanner}>
          <Alert
            icon={false}
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  handlecookieBannerClose();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {/* <AlertTitle>Info</AlertTitle> */}
            <div className={classes.cookieBanner}>
              <div className={classes.cookieBannerClose}>
                We use cookies to enhance your experience
              </div>
            </div>
          </Alert>
        </Collapse>
      </Snackbar>
    </div>
  );
}

/** wadagat weda mewwa hum
 *   {/* <Alert icon={false} severity="info">
            <AlertTitle>
              <div className={classes.cookieBanner}>
                <div className={classes.cookieBannerItem}>Info</div>
                <div className={classes.cookieBannerItem}>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      handlecookieBannerClose();
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </AlertTitle>
            <div className={classes.cookieBanner}>
              We use cookies to give you best experience
              <div className={classes.cookieBannerClose}>
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    handlecookieBannerClose();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </div>
            </div>
          </Alert>}
 */

import React, { useState } from "react";
import  Link  from "@material-ui/core/Link";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "./Landing.css";
// import SlideImg from "../Slide/slidehomeimages";
import VisibilitySensor from "react-visibility-sensor";
import Statsbar from "./Statsbar/statsbar";
import Footer from "./Footer/Footer";
import Quote from "../Quote/Quote";
import BannerHome from "./BannerHome/BannerHome";

import PropTypes from "prop-types";

import StepGuide from "./StepGuide/StepGuide";
import Banner from "./Banner/Banner";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const gradient =
  "linear-gradient(98deg, rgba(31,162,255,0.5085609243697479) 0%, rgba(18,216,250,0.002931547619047619) 100%)";

const gradientstatbar =
  "linear-gradient(98deg, rgba(31,162,255,0.5085609243697479) 0%, rgba(18,216,250,0.2931547619047619) 100%)";
// linear-gradient(90deg,#271066,rgba(39,16,102,0) 85%,rgba(39,16,102,0) 0,#271066)

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
    bottom: theme.spacing(10),
    right: "21px",
  },
  botBanner: {
    minHeight: "300px",
  },
  // https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80

  heroContent: {
    padding: theme.spacing(18, 10, 18),
    // backgroundImage: `${gradient}, url(${bg})`,
    backgroundImage: `${gradient}, url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)`,
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: "auto",
    // height: "35vh",
    //     backgroundatt -attachment: fixed;
    // background-size: cover;
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
  paper: {
    height: 200,
    width: 200,
    textAlign: "center",
    // position: "sticky",
    background: "#1fa2ff",
    color: "#ffffff",
  },
  statbar: {
    padding: "3rem",
    // backgroundImage: `${gradientstatbar}`,
    background: "rgb(245, 245, 245)",
  },
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div id="back-to-top-anchor"></div>
      <BannerHome />
      <Banner />
      <Container className={classes.cardGrid} maxWidth="md">
        <Container
          style={{
            paddingBottom: "1rem",
          }}
        ></Container>
        <StepGuide />
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
      <Footer />
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#1fa2ff" }}
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon style={{ color: "#ffffff" }} />
        </Fab>
      </ScrollTop>
    </div>
  );
}

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import "./Landing.css";
import Slide from "../Slide/Slide";
import SlideImg from "../Slide/slidehomeimages";
import Categories from "./subject/subjecttiles";
import VisibilitySensor from "react-visibility-sensor";
import Statsbar from "./Statsbar/statsbar";
import Footer from "./Footer/Footer";
import Navbar from "../Navbar/navbar";
import Screenshot from "./Screenshot/Screenshot";
import PropTypes from "prop-types";

// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
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
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  rootsroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Album(props) {
  const classes = useStyles();
  const [counterVisible, setcounterVisible] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      {/* <AppBar
        style={{ backgroundColor: "#ffffff", align: "center" }}
        position="relative"
      >
        <Toolbar style={{ backgroundColor: "#ffffff", alignItems: "center" }}>
          <CameraIcon className={classes.icon} />
          <Typography
            style={{ color: "#1FA2FF" }}
            variant="h4"
            color="inherit"
            noWrap
          >
            EduEra
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div>
        <div id="back-to-top-anchor" className={classes.heroContent}>
          <Container style={{ marginLeft: "2%" }} maxWidth="sm">
            <WhiteTextTypography
              component="h1"
              variant="h2"
              align="left"
              color="#ffffff"
              gutterBottom
            >
              EduEra
            </WhiteTextTypography>
            <WhiteTextTypography
              variant="h5"
              // align="center"
              color="textSecondary"
              paragraph
              align="left"
            >
              An interactive online platform <br></br>
              for taking multiple choice questions <br></br>
              and correcting awnsers.
            </WhiteTextTypography>
            {/* <WhiteTextTypography
              className="slider"
              component="h3"
              variant="h3"
              align="left"
              color="#ffffff"
              gutterBottom
            >
              EduEra
            </WhiteTextTypography> */}

            <Slide />
          </Container>
        </div>
      </div>{" "}
      <div className="content">
        <Categories />
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Container style={{ textAlign: "center", paddingBottom: "1rem" }}>
          <Typography style={{ color: "#1FA2FF" }} variant="h4" color="inherit">
            Our Vison is to <br></br> enhance the learing procedures of students{" "}
            <br></br> with information technolagy
          </Typography>
          <Typography
            style={{ color: "#000000" }}
            variant="h4"
            color="inherit"
            noWrap
          ></Typography>
        </Container>

        <SlideImg />

        {/* End hero unit */}
      </Container>
      <Screenshot />
      <VisibilitySensor
        onChange={(e) => {
          if (e) {
            setcounterVisible(true);
          }
        }}
      >
        <div className="scrollvisibile"></div>
      </VisibilitySensor>
      <Statsbar counterVisible={counterVisible} />
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#1fa2ff" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon style={{ color: "#ffffff" }} />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
}

/*  Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/darius-dan"
          title="Darius Dan"
        >
          Darius Dan
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/vitaly-gorbachev"
            title="Vitaly Gorbachev"
          >
            Vitaly Gorbachev
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          

Icons made by <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">wanicon</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div> */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
import github from "../../img/icons/github.png";
import gmail from "../../img/icons/gmail.png";
import Icon from "@material-ui/core/Icon";
import Slide from "../Slide/Slide";
import SlideImg from "../Slide/slidehomeimages";
import Categories from "./subject/subjecttiles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Copyright() {
  return (
    <WhiteTextTypography
      style={{ fontSize: "1.2rem" }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        EduEra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </WhiteTextTypography>
  );
}

const gradient =
  "linear-gradient(98deg, rgba(31,162,255,0.5085609243697479) 0%, rgba(18,216,250,0.002931547619047619) 100%)";
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
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
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
      </AppBar>
      <div>
        <div className={classes.heroContent}>
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
      <Categories />
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
      <footer className={classes.footer}>
        <div className="footerdiv">
          <div className="footerinner">
            <Copyright />
            <Divider style={{ margin: "24px auto", width: 600 }} />
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              spacing={0}
            >
              <Grid item xs={12} sm={6} md={3}>
                <a href="/">
                  <i class=" icons fa-3x fab fa-github"></i>
                </a>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <a className="linkanchor" href="/terms">
                  <WhiteTextTypography
                    style={{ fontSize: "1.2rem" }}
                    align={"center"}
                    gutterBottom
                    color={"textSecondary"}
                  >
                    Terms & Conditions{" "}
                  </WhiteTextTypography>
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <a href="/">
                  <i class="  icons fa-3x fab fa-facebook-f"></i>
                </a>
              </Grid>
            </Grid>{" "}
          </div>
        </div>
        {/* <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container> */}
      </footer>
    </div>
  );
}

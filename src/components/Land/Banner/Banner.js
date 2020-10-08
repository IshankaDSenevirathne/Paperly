import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

//Images

import BannerImage1 from "../../../img/Banner-2.png";
import BannerImage2 from "../../../img/Banner-3.png";
import wavesBot from "../../../img/wavebottom.svg";
import waves from "../../../img/wavestop.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#2a3136",
        color: "white",
        textTransform: "uppercase",
      }}
    >
      <img src={wavesBot} />

      <div style={{}}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={12} md container justify="center">
              <Grid item>
                <Typography gutterBottom variant="h5" align="center">
                  <b>The easiest way to answer A/L Past papers.</b>
                </Typography>
                <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" align="center">
                    Everything you need, 100% free.
                  </Typography>
                </div>

                <Typography gutterBottom variant="subtitle1" align="center">
                  <Link
                    to="/subjectmenu"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      GET STARTED
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sm={12} md justify="center">
              <div>
                <Hidden mdUp>
                  <img
                    alt="banner1"
                    style={{ width: "100%" }}
                    src={BannerImage1}
                  />
                </Hidden>
              </div>
              <div>
                <Hidden smDown>
                  <img
                    alt="banner1"
                    style={{ width: "100%" }}
                    src={BannerImage2}
                  />
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <img src={waves} />
    </div>
  );
}

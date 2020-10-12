import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

//Images

import BannerImage1 from "../../../img/Banner-2.svg";

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
        paddingTop:"60px",
        width:"100%",
        minHeight:"100%"
      }}
    >

      <div >
        <Container>
          <Grid container spacing={2} alignItems="center">
          <Grid container item sm={12} md={7} justify="center">
              <div>
                
                  <img
                    alt="banner1"
                    style={{ width: "100%" }}
                    src={BannerImage1}
                  />
                
              </div>
            </Grid>
            <Grid item sm={12} md={5} container justify="center">
            
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
            
          </Grid>
        </Container>
      </div>
    </div>
  );
}

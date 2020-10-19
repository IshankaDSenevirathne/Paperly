import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";


//Images
import BannerImg from "../../../img/BannerHome.svg";
import Wave from "../../../img/wavebottom.svg";


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
        backgroundColor: "#ffffff",
        color: "#2a3136",
        textTransform: "uppercase",
        paddingBottom:"10px",
        width:"100%",
      }}
    >

      <div style={{backgroundImage:`url(${Wave})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",paddingTop:"10px"}}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={12} md={6} container justify="center">
                <div data-aos="fade-up" data-aos-duration="1000" >
                  <Typography gutterBottom variant="h6" align="center">
                    <b>The easiest way to answer A/L Past papers.</b>
                  </Typography>
                  <div style={{ paddingTop: "5px", paddingBottom: "20px" }}>
                    <Typography gutterBottom variant="subtitle2" align="center">
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
                </div>
            </Grid>
            <Grid item sm={10} md={6} container justify="center">
              <div>
                <img src={BannerImg} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

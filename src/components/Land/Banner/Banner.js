import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";


//Images
import BannerImg from "../../../img/BannerHome.svg";
import Wave from "../../../img/wavebottom.svg";

const useStyles=makeStyles((theme)=>({
  item1:{
    order:1,
    [theme.breakpoints.down("sm")]:{
      order:2,
    }
  },
  item2:{
    order:2,
    [theme.breakpoints.down("sm")]:{
      order:1  
      }
    },
  image:{
    width:"100%",
  }
}))

export default function Banner() {
  const classes=useStyles();
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#2a3136",
        textTransform: "uppercase",
        width:"100%",
      }}
    >

      <div style={{backgroundImage:`url(${Wave})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",paddingTop:"20px",paddingBottom:"10px"}}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={12} md={6} container justify="center" className={classes.item1}>
                <div >
                  <Typography gutterBottom variant="h6" align="center">
                    <b>The easiest way to answer A/L Past papers.</b>
                  </Typography>
                  <div style={{ paddingTop: "5px", paddingBottom: "20px" }}>
                    <Typography gutterBottom variant="subtitle2" align="center">
                      Everything you need, 100% free.
                    </Typography>
                  </div>
                </div>
            </Grid>
            <Grid item sm={12} md={6} container justify="center" className={classes.item2}>
              <div>
                <img src={BannerImg} className={classes.image} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import BannerImage1 from "../../../img/Banner-2.png";
import BannerImage2 from "../../../img/Banner-3.png";
import wavesBot from "../../../img/wavebottom.svg";
import wavesTop from "../../../img/wavestop.svg";

export default function Banner() {
  return (
    <div
      style={{
        backgroundColor: "#2a3136",
        color: "white",
        textTransform: "uppercase",
      }}
    >
      <img src={wavesBot} />

      <div
        style={{
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item sm={12} md container justify="center">
              <Grid item>
                <Typography gutterBottom variant="h5" align="center">
                  <b>
                    The easiest way to answer Advanced Level Examination Past
                    papers.
                  </b>
                </Typography>
                <Typography gutterBottom variant="h6" align="center">
                  Everything you need, 100% free.
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
      <img src={wavesTop} />
    </div>
  );
}

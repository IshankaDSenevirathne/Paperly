import React from "react";

import Grid from "@material-ui/core/Grid";

import { green, red, blue, orange } from "@material-ui/core/colors";

import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Alarm from "@material-ui/icons/Alarm";
import CheckCircle from "@material-ui/icons/CheckCircle";
import LockOpen from "@material-ui/icons/LockOpen";

export default function HeadLine() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "100px",
        textTransform: "uppercase",
      }}
    >
      <div
        data-aos="fade-down"
        style={{
          padding: "20px 20px 20px 20px",
          marginTop: "50px",
          marginBottom: "100px",
          color: "#767676",
        }}
      >
        <h3>
          It’s not that I’m so smart, it’s just that I stay with problems longer
        </h3>
        <br></br> Albert Einstein
      </div>
      <div style={{ color: "whitesmoke" }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item sm={12} md={3} xs={12}>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              style={{
                padding: "20px 20px 20px 20px",
                border: "1px solid grey",
                borderRadius: "10px",
                backgroundColor: "#383838",
                boxShadow: "5px 5px 5px #aaaaaa",
              }}
            >
              <InsertDriveFile style={{ color: blue[500], fontSize: "60" }} />
              <p>Past Papers from O/L A/L Examinations</p>
            </div>
          </Grid>
          <Grid item sm={12} md={3} xs={12}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                padding: "20px 20px 20px 20px",
                border: "1px solid grey",
                borderRadius: "10px",
                backgroundColor: "#383838",
                boxShadow: "5px 5px 5px #aaaaaa",
              }}
            >
              <Alarm style={{ color: red[500], fontSize: "60" }} />
              <p>Time your answeres</p>
            </div>
          </Grid>
          <Grid item sm={12} md={3} xs={12}>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              style={{
                padding: "20px 20px 20px 20px",
                border: "1px solid grey",
                borderRadius: "10px",
                backgroundColor: "#383838",
                boxShadow: "5px 5px 5px #aaaaaa",
              }}
            >
              <CheckCircle style={{ color: green[500], fontSize: "60" }} />
              <p>Evaluate your answeres</p>
            </div>
          </Grid>
          <Grid item sm={12} md={3} xs={12}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                padding: "20px 20px 20px 20px",
                border: "1px solid grey",
                borderRadius: "10px",
                backgroundColor: "#383838",
                boxShadow: "5px 5px 5px #aaaaaa",
              }}
            >
              <LockOpen style={{ color: orange[500], fontSize: "60" }} />
              <p>Free Access to all features</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

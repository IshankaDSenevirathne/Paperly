import React from 'react'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import Logo from "../../Animations/Logo";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "whitesmoke",
        "&:hover": {
          backgroundColor: lightBlue[400],
          color: "white",
        },
      },
      button2: {
        color: "#ffffff",
        borderColor:"#ffffff",
        "&:hover": {
          borderColor:"#1fa2ff",
          color: "#1fa2ff",
        },
      },
}));



export default function BannerHome() {
    const classes  = useStyles();
    return (
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <Grid container  direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item  justify="center">
                    <Logo />                           
                </Grid>
                <Grid container justify="center" style={{paddingBottom:"20px"}}>
                    <div data-aos="zoom-in" data-aos-duration="1000" >
                        <Typography gutterBottom align="center" variant="h6">
                            <span style={{textTransform:"uppercase"}}>WELCOME TO PAPERLY</span>
                        </Typography>
                        <br></br>
                        <div>
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
                                    size="large"
                                    >
                                    GET STARTED
                                    </Button>
                                </Link>
                                &nbsp;
                                &nbsp;
                                <Link
                                to="/subjectmenu"
                                style={{
                                textDecoration: "none",
                                }}
                                >
                                    <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.button2}
                                    size="large"
                                    >
                                    LEARN MORE
                                    </Button>
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

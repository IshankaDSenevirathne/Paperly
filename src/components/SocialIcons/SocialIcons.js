import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { lightBlue } from "@material-ui/core/colors";

import FaceBook from "../../img/icons/facebook-2.svg";
import GitHub from "../../img/icons/github-2.svg";
import Twitter from "../../img/icons/twitter-2.svg";

const useStyles=makeStyles(()=>({

    buttons:{
        "& .MuiFab-extended.MuiFab-sizeMedium":{
            borderRadius:"0px",
            "&:hover":{
                backgroundColor:lightBlue[400],
            }
        }
    },
}))

export default function SocialIcons() {
    const classes = useStyles();
    return (
        <div style={{position:"fixed",top:"40%"}} data-aos="fade-right" data-aos-duration="1000">
            <Grid direction="column" container className={classes.buttons} >
                <Fab color="primary" variant="extended"  size="medium" aria-label="add">
                    <img src={FaceBook} />
                </Fab>
                <Fab color="primary" variant="extended" size="medium" aria-label="add">
                    <img src={Twitter} />
                </Fab>
                <Fab color="primary" variant="extended" size="medium" aria-label="add">
                    <img src={GitHub} />
                </Fab>
            </Grid>
        </div>
    )
}

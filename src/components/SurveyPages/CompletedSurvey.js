import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


import Tadaa from "../../img/tadaa.svg";

const useStyles=makeStyles(()=>({
    root:{
        color:"white",
        textAlign:"center",
        width:"100%"
    },
    feedback:{
        color:"white",
    }
}))

export default function CompletedSurvey() {
    const classes=useStyles();
    return (
        <div className="content">
            <div className={classes.root}>
                <div style={{paddingTop:"20px",paddingBottom:"50px"}}>
                    <Typography variant="h4" align="center">
                        <b>Congratulations !</b>
                    </Typography>
                    
                </div>
                <div style={{paddingBottom:"50px"}}>
                    <img src={Tadaa} width="200px" height="200px"></img>
                </div>
                <div style={{paddingTop:"20px",paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"50px"}}>
                        <Typography variant="h5" align="center">
                            <b>You have successfully completed the past paper.</b>
                        </Typography>
                    </div>
                    <Grid container justify="center">
                        <div style={{width:"90%"}}>
                            <Typography variant="subtitle2" align="center" style={{paddingBottom:"20px"}}>
                                <b>Give us your review</b>
                            </Typography>
                            <form noValidate autoComplete="off">
                                <TextField placeholder="Tell us what you think... " variant="filled" fullWidth={true} inputProps={{className:classes.feedback}} multiline rows={6} rowsMax={6} id="feedback" />
                            </form>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

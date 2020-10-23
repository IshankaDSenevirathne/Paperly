import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

// import Tadaa from "../Animations/Tadaa";
const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
function IconContainer(props) {
const { value, ...other } = props;
return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
value: PropTypes.number.isRequired,
};

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
        <div id="my-canvas" className="content">
            <div className={classes.root}>
                
                
                <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
                    <Typography variant="h4" align="center">
                        <b>Congratulations !</b>
                    </Typography>
                </div>
                <div style={{paddingTop:"20px",paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"50px"}}>
                        <Typography variant="h5" align="center">
                            <b>You have successfully completed the past paper.</b>
                        </Typography>
                    </div>
                    <Grid container justify="center">
                        <div style={{width:"90%"}}>
                            
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography variant="subtitle1" align="center" style={{paddingBottom:"20px"}}>
                                    <b>Give us your review</b>
                                </Typography>
                                    <Rating
                                        name="customized-icons"
                                        defaultValue={2}
                                        getLabelText={(value) => customIcons[value].label}
                                        IconContainerComponent={IconContainer}
                                    />
                            </Box>
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

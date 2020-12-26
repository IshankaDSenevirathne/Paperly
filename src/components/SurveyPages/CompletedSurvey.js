import React,{useState} from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { lightBlue } from "@material-ui/core/colors";

import Button from "@material-ui/core/Button";
import Tadaa from "../Animations/Tadaa";
import Loader from "../Animations/Loader";


const API =
  process.env.NODE_ENV === "production"
    ? `https://paperly-114b9e.us1.kinto.io`
    : "http://localhost:5000";

// const API = `https://paperly-114b9e.us1.kinto.io`;



const useStyles=makeStyles(()=>({
    root:{
        color:"white",
        textAlign:"center",
        width:"100%"
    },
    feedback:{
        color:"white",
    },
    forminner:{
        textAlign:"left",
    },feedbacknamedivider:{
        color:"white",
        paddingBottom:"1%"
    },
    submit:{
        color: "whitesmoke",
        "&:hover": {
            backgroundColor: lightBlue[400],
            color: "white",
        }
    }
}));

export default function CompletedSurvey(props) {
    const classes=useStyles();
    const [name, setname] = useState('');
    const [feedbackStatus,setFeedbackStatus]=useState(true);
    const [feedback, setfeedback] = useState('');
    const [loaderStatus,setLoaderStatus]=useState(false);
    
   const formSubmit=(e)=>{
        e.preventDefault();
        setLoaderStatus(true);
        let payload = {
            name,
            feedback,
            year: props.year,
            subject: props.subject,
          };


          fetch(`${API}/landingstats/addfeedback`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((res) => {
              if(res.status==="success"){
                setLoaderStatus(false);
                setFeedbackStatus(false);
              }
            });
        
}
    
    return (
        <div className="content">
            <Tadaa />
            <div className={classes.root}>
                <div style={{color:"#1fa2ff",paddingTop:"20px",paddingBottom:"20px"}}>
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
                            <div>
                                {feedbackStatus && 
                                <form className={classes.forminner} autoComplete="off" onSubmit={(e)=>formSubmit(e)}>
                    
                                    <TextField required placeholder="Your awesome name " variant="filled" fullWidth={true} inputProps={{className:classes.feedback}} onChange={e=>setname(e.target.value)} data-cy="name-feild" />
                                    <div className={classes.feedbacknamedivider} ></div>
                                    <TextField required placeholder="Tell us what you think... " variant="filled" fullWidth={true} inputProps={{className:classes.feedback}} multiline rows={6} rowsMax={6} id="feedback" onChange={e=>setfeedback(e.target.value)} data-cy="feedback-feild"/>
                                    <div className={classes.feedbacknamedivider} ></div>
                                    <Button type="submit" variant="contained" color="primary" className={classes.submit} data-cy="submit-feedback" >
                                        Submit
                                    </Button>
                                </form>
                                }
                                {!feedbackStatus &&
                                    <Typography variant="h5" align="center">
                                        Thank you for your feedback!
                                    </Typography>
                                }
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>
            {loaderStatus && <Loader/>}
        </div>
    )
}

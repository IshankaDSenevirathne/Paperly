import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReportProblemOutlined from "@material-ui/icons/ReportProblemOutlined";
import Info from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';

const useStyles=makeStyles(()=>({
    dialog:{
        background:"#363f44",
        color:"#ffffff",
    },
   uq:{
    borderRadius:"2px",
    background:"#3f51b5",
    color:"#ffffff",
    marginLeft:"4px",
    marginRight:"4px",
    padding:"5px",
    textAlign:"center"
    },
    title:{
     textAlign:"center"
    }
 }));
export function ReviewPass(props) {
    const {getReviewPass,state}=props;
    const classes = useStyles();
    const theme = useTheme();
    const [open,setOpen]=React.useState(state)
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleAgree=()=>{
        getReviewPass(true);
        setOpen(false);
    }
    const handleClose = () => {
        getReviewPass(false);
        setOpen(false);
    };
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                PaperProps={{className:classes.dialog}}
            >
                <DialogTitle className={classes.title}>
                    <ReportProblemOutlined style={{color:"#1fa2ff",fontSize:"50px"}}/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color:"#ffffff"}}>
                        You wont be able to review your answers after this step, are you sure you want to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" data-cy="disagree" >
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus data-cy="agree" >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export function AnswerPass(props) {
    const {getVerification,unanswered,state}=props;
    const classes = useStyles();
    const theme = useTheme();
    const [open,setOpen]=React.useState(state)
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleAgree=()=>{
        getVerification(true);
        setOpen(false);
    }
    const handleClose = () => {
        getVerification(false);
        setOpen(false);
    };
    //only supports questions upto 100
    const unansweredQ=
    (
        <div>
            {unanswered && 
                <Grid container alignItems="center" justify="flex-start" style={{color:"#3f51b5"}}>
                    {unanswered.map(question=>{
                            if(question<10){
                                return <Grid item lg={1} sm={1} ><p className={classes.uq}>{"0"+question}</p></Grid>
                            }else if(question>=10){
                                return <Grid item lg={1} sm={1}><p className={classes.uq}>{question}</p></Grid>
                            }
                        }
                    )
                    }
                </Grid>
            }   
        </div>
    );
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                PaperProps={{className:classes.dialog}}
            >
                <DialogTitle className={classes.title}>
                    <ReportProblemOutlined style={{color:"#1fa2ff",fontSize:"50px"}}/>
                </DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{color:"#ffffff"}}>
                        You wont be able to edit your answers after this step, are you sure you want to continue?
                    </DialogContentText>
                    {unanswered.length!==0 && 
                        <span>
                            <Typography style={{color:"#ffffff"}} variant="subtitle2" align="left">
                            You have following questions unanswered,
                            </Typography>
                            {unansweredQ}
                        </span>
                    }
                    {unanswered.length===0 && 
                        <span>
                            <Typography style={{color:"#ffffff"}} variant="subtitle2" align="left">
                            You have answered all the questions.
                            </Typography>
                        </span>
                    }
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" data-cy="disagree">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus data-cy="agree">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

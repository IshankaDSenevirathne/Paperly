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

const useStyles=makeStyles(()=>({
    dialog:{
        background:"#363f44",
        color:"#ffffff",
    },
    title:{
     textAlign:"center"
    }
 }));
export default function ReviewPass(props) {
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
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
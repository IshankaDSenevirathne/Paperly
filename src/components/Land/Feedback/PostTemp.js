import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background:"#363f44"
  },
  name: {
    color: "#1fa2ff",
  },
  message: {
    color: "whitesmoke",
  },
 
});

export default function PostTemp(props) {
  const {name,message}=props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.name} variant="subtitle1" align="left" gutterBottom>
            {name} :
        </Typography>
        <Typography className={classes.message} variant="body2" align="left">
            <i>"{message}"</i>  
        </Typography>
      </CardContent>
    </Card>
  );
}
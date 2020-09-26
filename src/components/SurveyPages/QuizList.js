import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Physics from "../../img/physics.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    border: "1px solid #4199FF",
    borderRadius: "8px",
    color: "#4199FF",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "#EDF5FF",
      border: "1px solid #1fa2ff",
    },
  },
}));

export default function QuizList(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { papersList, setPaper } = props;
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setPaper(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div style={{ paddingBottom: "10px", paddingTop: "30px" }}>
        <div style={{ paddingBottom: "50px", paddingTop: "30px" }}>
          <img src={Physics}></img>
        </div>
        <div className={classes.root}>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              onClick={handleClickListItem}
              className={classes.item}
            >
              <ListItemText primary={papersList[selectedIndex]} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {papersList.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div style={{ color: "#B2B2B2" }}>
          <h5>Select a past paper and click Next to start the exam</h5>
        </div>
      </div>
    </Grid>
  );
}

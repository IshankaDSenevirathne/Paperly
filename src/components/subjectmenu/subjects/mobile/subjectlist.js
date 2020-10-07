import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Grid from "@material-ui/core/Grid";

import Physics from "../../../../img/physics.png";
import Biology from "../../../../img/biology.png";
import Chemistry from "../../../../img/chemistry.png";
import iT from "../../../../img/IT.png";
import Mathematics from "../../../../img/maths.png";
import Marketing from "../../../../img/marketing.png";
const subjects = [
  {
    image: `${Physics}`,
    title: "Physics",
    link: "physics",
  },
  {
    image: `${Chemistry}`,
    title: "Chemistry",
    link: "chemistry",
  },
  {
    image: `${Biology}`,
    title: "Biology",
    link: "biology",
  },
  {
    image: `${Mathematics}`,
    title: "Mathematics",
    imageTitle: "Mathematics",
    link: "mathematics",
  },
  {
    image: `${iT}`,
    title: "IT",
    link: "it",
  },
  {
    image: `${Marketing}`,
    title: "Marketing",
    link: "Marketing",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: "#363f44",
    color: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [openScience, setOpenScience] = React.useState(false);
  const [openArt, setOpenArt] = React.useState(false);
  const [openCommerce, setOpenCommerce] = React.useState(false);

  const handleClick = (category) => {
    if (category == "science") {
      setOpenScience(!openScience);
    }
    if (category == "art") {
      setOpenArt(!openArt);
    }
    if (category == "commerce") {
      setOpenCommerce(!openCommerce);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item sm={12} md container justify="center">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button onClick={() => handleClick("science")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="SCIENCE" />
            {openScience ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openScience} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link
                  to={`/quizes?subject=physics`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Physics" />
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Chemistry" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Biology" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick("art")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="ART" />
            {openArt ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openArt} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Physics" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Chemistry" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Biology" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick("commerce")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="COMMERCE" />
            {openCommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openCommerce} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Physics" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Chemistry" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Biology" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid>
  );
}

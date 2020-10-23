import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { lightBlue } from "@material-ui/core/colors";

const science = [
  {
    title: "Physics",
    link: "physics",
  },
  {
    title: "Chemistry",
    link: "chemistry",
  },
  {
    title: "Biology",
    link: "biology",
  },
  {
    title: "IT",
    link: "it",
  },
];
const art = [
  {
    title: "Art",
    link: "art",
  },
  {
    title: "Drama",
    link: "drama",
  },
  {
    title: "Music",
    link: "music",
  },
  {
    title: "History",
    link: "history",
  },
];

const commerce = [
  {
    title: "Marketing",
    link: "marketing",
  },
  {
    title: "Economics",
    link: "economics",
  },
  {
    title: "Accounting",
    link: "accounting",
  },
  {
    title: "Buisness Studies",
    link: "buisness",
  },
  {
    title: "Statistics",
    link: "statistics",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#363f44",
    color: "white",
    borderRadius: "4px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    background: "#363f44",
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
    <div className='evaluation'>
      <Grid spacing={0} justify="center" alignItems="center">
        <Grid item sm={12} md justify="center">
          <Paper elevation={3} className={classes.paper}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <ListItem button onClick={() => handleClick("science")}>
                <ListItemIcon>
                  <ChevronRight style={{ color: lightBlue[400] }} />
                </ListItemIcon>
                <ListItemText primary="SCIENCE" />
                {openScience ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openScience} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {science.map((subject) => {
                    return (
                      <ListItem button className={classes.nested}>
                        <Link
                          to={`/quizes?subject=${subject.link}`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ListItemIcon>
                            <ChevronRight style={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText primary={subject.title} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
              <ListItem button onClick={() => handleClick("art")}>
                <ListItemIcon>
                  <ChevronRight style={{ color: lightBlue[400] }} />
                </ListItemIcon>
                <ListItemText primary="ART" />
                {openArt ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openArt} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {art.map((subject) => {
                    return (
                      <ListItem button className={classes.nested}>
                        <Link
                          to={`/quizes?subject=${subject.link}`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ListItemIcon>
                            <ChevronRight style={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText primary={subject.title} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
              <ListItem button onClick={() => handleClick("commerce")}>
                <ListItemIcon>
                  <ChevronRight style={{ color: lightBlue[400] }} />
                </ListItemIcon>
                <ListItemText primary="COMMERCE" />
                {openCommerce ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={openCommerce} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {commerce.map((subject) => {
                    return (
                      <ListItem button className={classes.nested}>
                        <Link
                          to={`/quizes?subject=${subject.link}`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ListItemIcon>
                            <ChevronRight style={{ color: "white" }} />
                          </ListItemIcon>
                          <ListItemText primary={subject.title} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
              <ListItem button>
                <Link
                  to={`/quizes?subject=engineeringtechnology`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon>
                    <ChevronRight style={{ color: lightBlue[400] }} />
                  </ListItemIcon>
                  <ListItemText primary="ENGINEERING TECHNOLOGY" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  to={`/quizes?subject=sciencefortechnology`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon>
                    <ChevronRight style={{ color: lightBlue[400] }} />
                  </ListItemIcon>
                  <ListItemText primary="SCIENCE FOR TECHNOLOGY" />
                </Link>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

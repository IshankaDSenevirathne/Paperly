import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { lightBlue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import Physics from "../../../../img/physics.svg";
import Biology from "../../../../img/plant.svg";
import Chemistry from "../../../../img/chemistry.svg";
import iT from "../../../../img/IT.svg";
import Marketing from "../../../../img/marketing.svg";
import History from "../../../../img/history.svg";
import Music from "../../../../img/music.svg";
import Drama from "../../../../img/drama.svg";
import Art from "../../../../img/art.svg";
import Economics from "../../../../img/economics.svg";
import Accounting from "../../../../img/accounting.svg";
import BusStudies from "../../../../img/busstudies.svg";
import Statistics from "../../../../img/statistics.svg";
import EngTech from "../../../../img/engtech.svg";
import SciForTech from "../../../../img/scifortech.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    background: "#363f44",
    display: "flex",
    borderRadius: "4px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "400px",
    minWidth: "200px",
  },
  button: {
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: lightBlue[400],
      color: "white",
    },
  },
  tabContent: {
    width: "100%",
    "& .MuiBox-root": {
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "10px",
      paddingBottom: "50px",
    },
  },
  start: {
    color: "white",
  },
  paper: {
    background: "#363f44",
  },
}));
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
    image: `${iT}`,
    title: "IT",
    link: "it",
  },
  {
    image: `${Marketing}`,
    title: "Marketing",
    link: "marketing",
  },
  {
    image: `${Art}`,
    title: "Art",
    link: "art",
  },
  {
    image: `${Drama}`,
    title: "Drama",
    link: "drama",
  },
  {
    image: `${Music}`,
    title: "Music",
    link: "music",
  },
  {
    image: `${History}`,
    title: "History",
    link: "history",
  },
  {
    image: `${Economics}`,
    title: "Economics",
    link: "economics",
  },
  {
    image: `${Accounting}`,
    title: "Accounting",
    link: "accounting",
  },
  {
    image: `${BusStudies}`,
    title: "Business Studies",
    link: "buisness",
  },
  {
    image: `${Statistics}`,
    title: "Statistics",
    link: "statistics",
  },
  {
    image: `${SciForTech}`,
    title: "SCIENCE FOR TECHNOLOGY",
    link: "sciencefortechnology",
  },
  {
    image: `${EngTech}`,
    title: "ENGINEERING TECHNOLOGY",
    link: "engineeringtechnology",
  },
];
export default function SubjectTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [loadingState, setLoadingState] = React.useState(true);
  const handleChange = (event, newValue) => {
    if (newValue == value) {
      return;
    }
    setLoadingState(true);
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <div
        style={{
          textAlign: "center",
          color: "#383838",
        }}
        id="pastpapers"
      >
        <div>
          <h1
            style={{
              paddingBottom: "20px",
              color: "#ffffff",
            }}
          >
            SUBJECTS
          </h1>
        </div>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              className={classes.tabs}
              indicatorColor="primary"
            >
              {subjects.map((subject) => (
                <Tab
                  label={subject.title}
                  id={subjects.indexOf(subject)}
                  aria-controls={subjects.indexOf(subject)}
                />
              ))}
            </Tabs>
            {subjects.map((subject) => (
              <TabPanel
                className={classes.tabContent}
                value={value}
                index={subjects.indexOf(subject)}
              >
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item sm={6} container justify="center">
                    <Grid item>
                      <div>
                        {loadingState && (
                          <div>
                            <Skeleton
                              variant="rect"
                              width={183}
                              height={210}
                            ></Skeleton>
                          </div>
                        )}
                        <img
                          onLoad={() => setLoadingState(false)}
                          src={subject.image}
                        ></img>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container item sm={6} justify="center">
                    <Typography gutterBottom variant="subtitle1" align="center">
                      <b>
                        Evolution is the fundamental idea in all of life science
                        - in all of biology.{" "}
                      </b>
                    </Typography>
                    <div>
                      <Link to={`/quizes?subject=${subject.link}`}>
                        <Button
                          className={classes.start}
                          variant="contained"
                          color="primary"
                        >
                          START
                        </Button>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </div>
        </Paper>
      </div>
    </Container>
  );
}

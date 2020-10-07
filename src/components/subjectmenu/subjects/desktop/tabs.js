import React from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { lightBlue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Physics from "../../../../img/physics.svg";
import Biology from "../../../../img/plant.svg";
import Chemistry from "../../../../img/chemistry.svg";
import iT from "../../../../img/IT.svg";
import Marketing from "../../../../img/marketing.svg";
import { Grid } from "@material-ui/core";

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
    height: "340px",
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
  },
  start: {
    color: "white",
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
];
export default function SubjectTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <div
        style={{
          textAlign: "center",
          color: "#383838",
          borderRadius: "4px",
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
              <div>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item sm={6} container justify="center">
                    <Grid item>
                      <div style={{ marginBottom: "10px" }}>
                        <img src={subject.image}></img>
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
                      <Button
                        className={classes.start}
                        variant="contained"
                        color="primary"
                      >
                        START
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </Container>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";



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
import cardBackground from "../../../../img/cardBackground.svg";


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
    borderRadius: "10px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingLeft:"1px",
    height: "400px",
    minWidth: "200px",
  },
  button: {
    color: "#ffffff",
    borderTopLeftRadius:"10px",
    borderBottomLeftRadius:"10px",
    borderTopRightRadius:"10px",
    borderBottomRightRadius:"10px",
    transition:"0.5s ease-in-out",
    "&:hover": {
      color: "#ffffff",
      backgroundColor:"#1B7ABE",
    },
  },
  tabContent: {
    width: "100%",
    backgroundImage: `url(${cardBackground})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundColor:"#363f44",
    borderTopRightRadius:"10px",
    borderBottomRightRadius:"10px",
    "& .MuiBox-root": {
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
  selected:{
    background:"#1fa2ff",
    color:"white",
    
  },
  paper: {
    background: "#363f44",
    borderRadius:"10px"
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
  const handleChange = (event, newValue) => {
    if (newValue == value) {
      return;
    }
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
        <Paper elevation={10} className={classes.paper}>
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
                  className={value==subjects.indexOf(subject)?classes.selected:""}
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
                <Grid container alignItems="center" justify="center" style={{height:"400px"}}>
                    <Grid item>
                      <Link to={`/quizes?subject=${subject.link}`}>
                        <Button className={classes.button}>
                          <div style={{display:"flex",flexDirection:"column"}}>
                            <span data-aos="fade-in" data-aos-delay="200">
                              <img src={subject.image} onLoad={()=>{
                                
                              }}></img>
                            </span>
                            <span data-aos="fade-right" data-aos-delay="300">
                              <Typography align="center" variant="h6">
                                  <b>Start</b>
                              </Typography>
                            </span>
                          </div>
                        </Button>
                      </Link>
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

{/*
                          <Typography gutterBottom variant="subtitle1" align="center">
                            START
                          </Typography> 
                        </Link>*/}
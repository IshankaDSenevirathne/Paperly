import React from 'react'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";


import Chemistry from "../../../img/chemistry.svg";
import Physics from "../../../img/physics.svg";
import Biology from "../../../img/biology.svg";
import iT from "../../../img/IT.svg";

import Art from "../../../img/art.svg";
import Music from "../../../img/music.svg";
import History from "../../../img/history.svg";
import Drama from "../../../img/drama.svg";

import Marketing from "../../../img/marketing.svg";
import Economics from "../../../img/economics.svg";
import BusinessStudies from "../../../img/busstudies.svg";
import Statistics from "../../../img/statistics.svg";
import Accounting from "../../../img/accounting.svg";

import Sci4Tech from "../../../img/scifortech.svg";
import EngTech from "../../../img/engtech.svg";

import Rocket from "../../Animations/Rocket";
import RocketWave from "../../../img/rocketWave.svg";

import directionals from "../../../img/directionals.svg";


const useStyles=makeStyles(()=>({
    button: {
        color: "#EDEDED",
        borderTopLeftRadius:"0px",
        borderBottomLeftRadius:"0px",
        borderTopRightRadius:"0px",
        borderBottomRightRadius:"0px",
        transition:"0.5s ease-in-out",
        width:"100%",
        minHeight:"200px",
        "&:hover": {
          background:"#3f51b5",
          color: "#ffffff",
        },
    },
    paper: {
    background: "#363f44",
    borderRadius:"0px",
    textAlign:"center",
    },
}))

const science = [
    {
      title: "Physics",
      link: "physics",
      image:Physics
    },
    {
      title: "Chemistry",
      link: "chemistry",
      image:Chemistry

    },
    {
      title: "Biology",
      link: "biology",
      image:Biology

    },
    {
      title: "IT",
      link: "it",
      image:iT
    },
  ];
  const art = [
    {
      title: "Art",
      link: "art",
      image:Art
    },
    {
      title: "Drama",
      link: "drama",
      image:Drama
    },
    {
      title: "Music",
      link: "music",
      image:Music
    },
    {
      title: "History",
      link: "history",
      image:History
    },
  ];
  
  const commerce = [
    {
      title: "Marketing",
      link: "marketing",
      image:Marketing

    },
    {
      title: "Economics",
      link: "economics",
      image:Economics

    },
    {
      title: "Accounting",
      link: "accounting",
      image:Accounting

    },
    {
      title: "Business Studies",
      link: "buisness",
      image:BusinessStudies

    },
    {
      title: "Statistics",
      link: "statistics",
      image:Statistics

    },
  ];
const other = [
    {
        title: "Science for Technology",
        link: "sci4tech",
        image:Sci4Tech

    },
    {
        title: "Engineering Technology",
        link: "engtech",
        image:EngTech

    },
]
export default function Categories() {
    const classes=useStyles();
    return (
        <div>
            <div style={{background:"#2a3136",backgroundImage:`url(${RocketWave})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",marginBottom:"50px",textAlign:"left"}}>
                <Rocket />
            </div>
            <Container>
                <div style={{textAlign:"center"}}>
                        <Typography variant="h4">
                            CATEGORIES
                        </Typography>
                    <img src={directionals} />
                </div>
                <div id ='science'  style={{marginTop:"50px",paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            SCIENCE
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {science.map((subject)=>(
                            <Grid item xs={6} sm={3} md={3}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='art'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            ART
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {art.map((subject)=>(
                            <Grid item xs={6} sm={3} md={3}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='commerce'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            COMMERCE
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {commerce.map((subject)=>(
                            <Grid item xs={6} sm={3} md={3}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
                <div id ='other'  style={{paddingBottom:"50px"}}>
                    <div style={{paddingBottom:"30px"}}>
                        <Typography variant="h5" align="left">
                            OTHER
                        </Typography>
                    </div>
                    <Grid alignItems="center" justify="left" spacing={1} container>
                        {other.map((subject)=>(
                            <Grid item xs={6} sm={3} md={3}>
                                <div>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Link to={`/quizes?subject=${subject.link}`} style={{textDecoration:"none"}}>
                                            <Button className={classes.button}>
                                                <div>
                                                    <img src={subject.image}></img>
                                                    <Typography align="center" variant="subtitle1">
                                                        {subject.title}
                                                    </Typography>
                                                </div>
                                            </Button>
                                        </Link>
                                    </Paper> 
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>    
            </Container>
        </div>
    )
}

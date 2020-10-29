import React,{useEffect} from 'react'
import {TimelineMax,Power1} from "gsap/dist/gsap";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

import "./Logo.css"

const useStyles = makeStyles((theme) => ({
    button: {
        color: "whitesmoke",
        "&:hover": {
          backgroundColor: lightBlue[400],
          color: "white",
        },
      },
      button2: {
        color: "#ffffff",
        borderColor:"#ffffff",
        "&:hover": {
          borderColor:"#1fa2ff",
          color: "#1fa2ff",
        },
      },
}));
export default function Logo() {
    const classes  = useStyles();

    useEffect(()=>{
        const tl = new TimelineMax();
        tl
        .set("#title",{opacity:0})
        .set("#getStarted",{opacity:0})
        .set("#learnMore",{opacity:0})
        .set("#circle1",{x:-150,opacity:0,scale:0.5})
        .set("#circle2",{x:150,opacity:0,scale:0.5})
        .set("#circle3",{opacity:0})
        .set("#circle4",{opacity:0})
        .set("#part1",{x:200,opacity:0})
        .set("#part2",{x:-200,opacity:0})
        .set("#part3",{y:-200,opacity:0})
        .to("#part1",{ x:0,duration:2,opacity:1,ease:Power1.easeInOut})
        .to("#part2",{ x:0,duration:2,opacity:1,ease:Power1.easeInOut},'-=1.7')
        .to("#part3",{ y:0,duration:2,opacity:1,ease:Power1.easeInOut},'-=1.7')
        .to("#circle1",{duration:2,y:0,x:0,opacity:0.1,scale:1,ease:Power1.easeInOut})
        .to("#circle2",{duration:2,x:0,opacity:0.09,scale:1,ease:Power1.easeInOut},'-=2')
        .to("#circle1",{duration:0.07,opacity:0,ease:"none"})
        .to("#circle1",{duration:0.1,opacity:0.1,ease:"none"},'+=1')
        .to("#circle1",{duration:0.04,opacity:0,ease:"none"})
        .to("#circle2",{duration:0.02,opacity:0,ease:"none"})
        .to("#circle3",{duration:0.01,opacity:0.1,ease:"none"},'+=0.2')
        .to("#circle4",{duration:0.01,opacity:0.09,ease:"none",scale:1.2},'+=0.1')
        .to("#title",{duration:2.5,opacity:1},'-=1.7')
        .to("#getStarted",{duration:0.6,opacity:1,ease:Power1.easeInOut},'-=2.1')
        .to("#learnMore",{duration:0.6,opacity:1,ease:Power1.easeInOut},'-=1.9');
    },[])
    return (
        <div>
            <div className="logo">
                <svg  width="100%" height="501.52" viewBox="0 0 517.64 501.52"><title>Paperly (8)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g id="circle3" style={{opacity:"0.07"}}><circle cx="193.15" cy="301.79" r="193.15" style={{fill:"#4555a5"}}/></g><g id="circle4" style={{opacity:"0.19"}}><circle cx="404.18" cy="80.89" r="46.46" style={{fill:"#4e9ad4"}}/></g><g id="circle1" style={{opacity:"0.07"}}><circle cx="193.15" cy="301.79" r="193.15" style={{fill:"#dce3e5"}}/></g><g id="circle2" style={{opacity:"0.19"}}><circle cx="404.18" cy="80.89" r="46.46" style={{fill:"#edefef"}}/></g><g id="part3"><path d="M394.47,150a10,10,0,0,0-5.08-8.3l-5.3-2.52-.22-.11s-2.39-1.15-5.31-2.54L205.06,54.05c-2.92-1.39-3.58-.52-1.47,1.92L283,147.91a33.7,33.7,0,0,0,9.16,7l53.89,25.6c2.92,1.39,5.3,2.54,5.29,2.56s2.38,1.16,5.3,2.55l22.76,10.84,10.17,4.84c2.68,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M206.72,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,2,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M398.5,141.22c0-3.7-2.69-5.32-6-3.61L142.73,267.92c-3.28,1.71-3.41,4.73-.3,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L392.56,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>
            </div>
            <div id="title" style={{paddingTop:"10px",paddingBottom:"20px"}}>
                <Typography gutterBottom variant="h6" align="center">
                  WELCOME TO PAPERLY
                </Typography>
            </div>
            <div>
                <div>
                    <Typography gutterBottom variant="subtitle1" align="center">
                        <Link
                            id="getStarted"
                            to="/subjectmenu"
                            style={{
                            textDecoration: "none",
                            }}
                        >
                            <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            size="large"
                            >
                            GET STARTED
                            </Button>
                        </Link>
                        &nbsp;
                        &nbsp;
                        <Link
                        id="learnMore"
                        to="/subjectmenu"
                        style={{
                        textDecoration: "none",
                        }}
                        >
                            <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button2}
                            size="large"
                            >
                            LEARN MORE
                            </Button>
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    )
}


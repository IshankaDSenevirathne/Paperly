import React,{useEffect} from 'react'
import {Hidden,Typography,Grid} from '@material-ui/core';
import {TimelineMax,Circ, Power1} from "gsap/dist/gsap";
import "./Logo.css"

export default function Logo() {
    useEffect(()=>{
        const tl = new TimelineMax();
        tl
        .set(".title",{opacity:0})
        .set(".subtitle",{opacity:0})
        .set("#part1",{x:200,opacity:0})
        .set("#part2",{x:-200,opacity:0})
        .set("#part3",{y:-200,opacity:0})
        .to("#part1",{ x:0,duration:1.5,opacity:1,ease:Circ.easeOut})
        .to("#part2",{ x:0,duration:1.5,opacity:1,ease:Circ.easeOut},'-=1.3')
        .to("#part3",{ y:0,duration:1.5,opacity:1,ease:Circ.easeOut},'-=1.4')
        .to(".title",{duration:2,opacity:1,ease:Power1.easeInOut},'-=0.6')
        .to(".subtitle",{duration:2,opacity:1,ease:Power1.easeInOut},'-=1');

    },[])
    return (
        <div>
            <Grid justify="center" direction="column" alignItems="center" container>
                <Grid item>
                    <div className="logo">
                        <svg  width="100%" height="100%" viewBox="0 0 500 501.52"><title>Paperly (11)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g id="part3"><path d="M376.83,150a10,10,0,0,0-5.09-8.3l-5.3-2.52-.21-.11s-2.39-1.15-5.31-2.54L187.42,54.05c-2.93-1.39-3.59-.52-1.47,1.92l79.45,91.94a33.7,33.7,0,0,0,9.16,7l53.88,25.6c2.92,1.39,5.31,2.54,5.3,2.56s2.37,1.16,5.29,2.55l22.77,10.84L372,201.27c2.67,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M189.08,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,1.95,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M380.85,141.22c0-3.7-2.68-5.32-6-3.61L125.08,267.92c-3.27,1.71-3.4,4.73-.29,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L374.92,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>   
                    </div>
                </Grid>
                <Grid item>
                    <div>
                        <div className="title">
                            <Hidden mdDown>
                                <Typography variant="h2" align="center">
                                    <div style={{fontFamily:"titleFont",textTransform:"uppercase"}}>
                                        <b><span style={{color:"#1fa2ff"}}>Paperly</span></b>
                                    </div>
                                </Typography>
                            </Hidden>
                        </div>
                        <div className="subtitle">
                            <Hidden mdDown>
                                <Typography variant="h5" align="center">
                                    <div style={{fontFamily:"titleFont",textTransform:"uppercase"}}>
                                        <b>Your Next Generation PastPaper Companion</b>
                                    </div>
                                </Typography>
                            </Hidden>
                        </div>
                        <div className="title">
                            <Hidden lgUp>
                                <div style={{ paddingLeft:'15px',paddingRight:"15px"}}>
                                    <Typography variant="h4" align="center">
                                        <div style={{fontFamily:"titleFont",textTransform:"uppercase"}}>
                                            <b><span style={{color:"#1fa2ff"}}>Paperly</span></b>
                                        </div>
                                    </Typography>
                                </div>
                            </Hidden>
                        </div>
                        <div className="subtitle">
                            <Hidden lgUp>
                                    <Typography variant="subtitle1" align="center">
                                        <div style={{fontFamily:"titleFont",textTransform:"uppercase"}}>
                                            <b>Your Next Generation PastPaper Companion</b>
                                        </div>
                                    </Typography>
                            </Hidden>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


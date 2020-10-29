import React,{useEffect} from 'react';
import {Grid,Typography} from '@material-ui/core';
import {TimelineMax,Sine,TweenMax,Linear} from "gsap/dist/gsap";
import RocketImage from "../../img/Rocket.svg"
import "./Rocket.css";
export default function Rocket() {

    useEffect(()=>{
        var tlrocketFly = new TimelineMax({yoyo:true, repeat:-1});
            tlrocketFly.to(".rocketCont", .4, {y:5, rotation:-.5, transformOrigin: "bottom center", ease:Sine.easeInOut})
        .to(".rocketCont", .4, {y:2, rotation:.25, ease:Sine.easeInOut})
        .to(".rocketCont", .4, {y:-2.5, rotation:-.25, ease:Sine.easeInOut})
        .to(".rocketCont", .4, {y:6, rotation:.5, ease:Sine.easeInOut});
        TweenMax.set("#stars", {y:-300, opacity:0.6})
        var tlstars = new TimelineMax({repeat:-1});
            tlstars.to("#stars", 1, {y:0, ease:Linear.easeNone})
    },[])

    return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                <div class="rocketCont">
                    <div class="rocketShip">
                        <img src={RocketImage} width="164" height="244"></img>
                <div class="starCont">
                    <div class="rocketFire">
                        <div id="starField">
                            <svg version="1.1" id="stars" x="0px" y="0px"
                                width="400px" height="600px" viewBox="0 0 300 600">
                                <circle class="st0" cx="28.2" cy="37" r="2.5"/>
                                <circle class="st0" cx="188.2" cy="97" r="2.5"/>
                                <circle class="st0" cx="138.2" cy="47" r="2.5"/>
                                <circle class="st0" cx="158.2" cy="167" r="2.5"/>
                                <circle class="st0" cx="98.2" cy="97" r="1"/>
                                <circle class="st0" cx="172.2" cy="172" r="1"/>
                                <circle class="st0" cx="122.2" cy="142" r="1"/>
                                <circle class="st0" cx="182.2" cy="242" r="1"/>
                                <circle class="st0" cx="72.2" cy="262" r="1"/>
                                <circle class="st0" cx="147.2" cy="34" r="1"/>
                                <circle class="st0" cx="142.2" cy="232" r="1"/>
                                <circle class="st0" cx="172.2" cy="82" r="1"/>
                                <circle class="st0" cx="167.6" cy="87.7" r="1"/>
                                <circle class="st0" cx="142.2" cy="92" r="1"/>
                                <circle class="st0" cx="269.2" cy="171" r="1"/>
                                <circle class="st0" cx="239.2" cy="51" r="1"/>
                                <circle class="st0" cx="238.9" cy="140.7" r="1.2"/>
                                <circle class="st0" cx="152.2" cy="262" r="1"/>
                                <circle class="st0" cx="222.2" cy="182" r="1"/>
                                <circle class="st0" cx="142.2" cy="192" r="1"/>
                                <circle class="st0" cx="42.2" cy="192" r="1"/>
                                <circle class="st0" cx="112.2" cy="222" r="1"/>
                                <circle class="st0" cx="42.2" cy="122" r="1"/>
                                <circle class="st0" cx="254.2" cy="220" r="4.4"/>
                                <circle class="st0" cx="204.2" cy="1" r="1"/>
                                <circle class="st0" cx="230.2" cy="290" r="1"/>
                                <circle class="st0" cx="80.2" cy="270" r="2.5"/>
                                <circle class="st0" cx="110.2" cy="290" r="2.5"/>
                                <circle class="st0" cx="28.2" cy="337" r="2.5"/>
                                <circle class="st0" cx="188.2" cy="397" r="2.5"/>
                                <circle class="st0" cx="138.2" cy="347" r="2.5"/>
                                <circle class="st0" cx="158.2" cy="467" r="2.5"/>
                                <circle class="st0" cx="98.2" cy="397" r="1"/>
                                <circle class="st0" cx="172.2" cy="472" r="1"/>
                                <circle class="st0" cx="122.2" cy="442" r="1"/>
                                <circle class="st0" cx="182.2" cy="542" r="1"/>
                                <circle class="st0" cx="72.2" cy="562" r="1"/>
                                <circle class="st0" cx="147.2" cy="334" r="1"/>
                                <circle class="st0" cx="142.2" cy="532" r="1"/>
                                <circle class="st0" cx="172.2" cy="382" r="1"/>
                                <circle class="st0" cx="167.6" cy="387.7" r="1"/>
                                <circle class="st0" cx="142.2" cy="392" r="1"/>
                                <circle class="st0" cx="269.2" cy="471" r="1"/>
                                <circle class="st0" cx="239.2" cy="351" r="1"/>
                                <circle class="st0" cx="238.9" cy="440.8" r="1.2"/>
                                <circle class="st0" cx="152.2" cy="562" r="1"/>
                                <circle class="st0" cx="222.2" cy="482" r="1"/>
                                <circle class="st0" cx="142.2" cy="492" r="1"/>
                                <circle class="st0" cx="42.2" cy="492" r="1"/>
                                <circle class="st0" cx="112.2" cy="522" r="1"/>
                                <circle class="st0" cx="42.2" cy="422" r="1"/>
                                <circle class="st0" cx="254.2" cy="520" r="4.4"/>
                                <circle class="st0" cx="204.2" cy="301" r="1"/>
                                <circle class="st0" cx="230.2" cy="590" r="1"/>
                                <circle class="st0" cx="80.2" cy="570" r="2.5"/>
                                <circle class="st0" cx="110.2" cy="590" r="2.5"/>
                            </svg>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    SKYROCKET YOUR PERFORMANCE WITH PAPERLY
                </Typography>
            </Grid>
        </Grid>

    )
}

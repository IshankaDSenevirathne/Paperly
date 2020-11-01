import React,{useEffect} from 'react';
import {Grid,Hidden,Typography} from '@material-ui/core';
import {TimelineMax,Sine,Linear, Power1} from "gsap/dist/gsap";
export default function Rocket() {

    useEffect(()=>{

        var tlStars = new TimelineMax({repeat:-1});
            tlStars.from("#star1",{scale:1.2,duration:1,ease:Power1.easeInOut})
            tlStars.from("#star1",{scale:1,duration:1,ease:Power1.easeInOut})
            tlStars.from("#star2",{scale:1.2,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star2",{scale:1,duration:1,ease:Power1.easeInOut},'-=.5')
            tlStars.from("#star3",{scale:1.3,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star3",{scale:1,duration:1,ease:Power1.easeInOut},'-=.5')
            tlStars.from("#star4",{scale:1.2,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star4",{scale:1.2,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star5",{scale:1.2,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star5",{scale:1,duration:1,ease:Power1.easeInOut},'-=.5')
            tlStars.from("#star6",{scale:1.3,duration:1,ease:Power1.easeInOut},'-=1.5')
            tlStars.from("#star6",{scale:1,duration:1,ease:Power1.easeInOut},'-=.5')

        var tlrocketFly = new TimelineMax({yoyo:true, repeat:-1});
            tlrocketFly.to("#Rocket", .4, {y:5, rotation:-.5, transformOrigin: "bottom center", ease:Sine.easeInOut})
        .to("#Rocket", .4, {y:2, rotation:.25, ease:Sine.easeInOut})
        .to("#Rocket", .4, {y:-2.5, rotation:-.25, ease:Sine.easeInOut})
        .to("#Rocket", .4, {y:6, rotation:.5, ease:Sine.easeInOut});
        
        var tlParticles= new TimelineMax({repeat:-1})
        tlParticles
                .set("#particle1", {y:-170, opacity:1})
                .set("#particle2", {y:-320, opacity:1})
                .set("#particle3", {y:-500, opacity:0.6})
                .set("#particle4", {y:-600, opacity:0.6})
                .set("#particle5", {y:-250, opacity:0.6})
                .set("#particle6", {y:-530, opacity:0.6})
                .set("#particle7", {y:-500, opacity:0.6})
                .set("#particle8", {y:-50, opacity:0.6})
                .set("#particle9", {y:-40, opacity:0.6})
                .set("#particle10", {y:-600, opacity:0.6})
                .set("#particle11", {y:-80, opacity:0.6})
                .set("#particle12", {y:-150, opacity:0.6})
                .to("#particle1", {y:390,duration:1,opacity:0,ease:Linear.easeNone})
                .to("#particle2", {y:170, duration:1,opacity:0,ease:Linear.easeNone},'-=0.3')
                .to("#particle3", {y:40, duration:1,opacity:0,ease:Linear.easeNone},'-=0.3')
                .to("#particle5", {y:290, duration:1,opacity:0,ease:Linear.easeNone},'-=1.5')
                .to("#particle6", {y:10, duration:1,opacity:0,ease:Linear.easeNone},'-=0.6')
                .to("#particle7", {y:40, duration:1,opacity:0,ease:Linear.easeNone},'-=0.8')
                .to("#particle8", {y:490, duration:1,opacity:0,ease:Linear.easeNone},'-=.2')
                .to("#particle6", {y:10, duration:1,opacity:0,ease:Linear.easeNone},'-=0.6')
                .to("#particle9", {y:500, duration:1,opacity:0,ease:Linear.easeNone},'+=0.1')
                .to("#particle10", {y:0, duration:1,opacity:0,ease:Linear.easeNone})
                .to("#particle4", {y:10, duration:1,opacity:0,ease:Linear.easeNone},'-=1.5')
                .to("#particle11", {y:460, duration:1,opacity:0,ease:Linear.easeNone},'-=0.6')
                .to("#particle12", {y:390, duration:1,opacity:0,ease:Linear.easeNone},'-=2.6')

        var tlTitle=new TimelineMax();
        tlTitle
            .set(".title",{opacity:0})
            .to(".title",{duration:2,opacity:1,ease:Power1.easeInOut})

        var tlRocketFire = new TimelineMax({repeat:-1});
        tlRocketFire
            .to("#innerFire",{scale:1.2,opacity:0.8,transformOrigin:"top",duration:0.4,ease:Sine.easeInOut})
            .to("#outerFire",{scale:1.2,opacity:0.6,transformOrigin:"top",duration:0.4,ease:Sine.easeInOut},'-=0.4')
            .to("#innerFire",{scale:1,opacity:1,duration:0.6,ease:Sine.easeInOut},)
            .to("#outerFire",{scale:1,opacity:1,duration:0.6,ease:Sine.easeInOut},'-=0.6')
        
               
    },[])

    return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center" style={{minHeight:"100vh"}}>
                    <Grid item sm={12} md={7}>
                    <svg width="100%" height="540" viewBox="0 0 350 626.97">
                    <title>RocketImage</title>
                    <g style={{isolation:"isolate"}}>
                    <g id="Layer_2" data-name="Layer 2">
                    <g id="RocketImage">
                    <g id="Background">
                    <g style={{enableBackground:"new 0 0 300 600", overflow:"hidden",height:"300px"}}>
                        <circle id="particle1" cx="209.09" cy="158.16" r="5.62" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle2" cx="321.48" cy="302.28" r="2" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle3" cx="320.25" cy="495.04" r="1.23" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle4" cx="40.07" cy="587.11" r="1.53" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle5" cx="45.87" cy="244.45" r="4.27" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle6" cx="139.04" cy="519.89" r="2.01" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle7" cx="216.52" cy="460.78" r="3.06" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle8" cx="252.6" cy="33.41" r="7.9" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle9" cx="33.63" cy="25.51" r="6.44" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle10" cx="234.73" cy="571.93" r="6.11" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle11" cx="151.58" cy="70.97" r="4.14" style={{fill:"#f1f1f1"}}/>
                        <circle id="particle12" cx="24.2" cy="133.19" r="2.99" style={{fill:"#f1f1f1"}}/>
                    </g>
                    <g id="Stars">
                        <path id="star1" d="M339.82,51.48a24.5,24.5,0,0,0,4.36-.59,25.13,25.13,0,0,0-4.36-.58,14.42,14.42,0,0,0,1.48-1.88,16.41,16.41,0,0,0-2,1.36,20,20,0,0,0-.63-4,20.37,20.37,0,0,0-.64,4,15.94,15.94,0,0,0-2-1.36,13.75,13.75,0,0,0,1.47,1.88,25.33,25.33,0,0,0-4.36.58,24.69,24.69,0,0,0,4.36.59A14.09,14.09,0,0,0,336,53.35,15.15,15.15,0,0,0,338,52a20.35,20.35,0,0,0,.64,4,20,20,0,0,0,.63-4,15.58,15.58,0,0,0,2,1.35A14.8,14.8,0,0,0,339.82,51.48Z" style={{fill:"#f1f1f1"}}/>
                        <path id="star2" d="M253.8,115.07a25.64,25.64,0,0,0,4.35-.59,25.1,25.1,0,0,0-4.35-.58,15.7,15.7,0,0,0,1.47-1.88,15.13,15.13,0,0,0-2,1.36,20,20,0,0,0-.63-4,20.37,20.37,0,0,0-.64,4,14.72,14.72,0,0,0-2-1.36,15.7,15.7,0,0,0,1.47,1.88,25.1,25.1,0,0,0-4.35.58,25.64,25.64,0,0,0,4.35.59,15.22,15.22,0,0,0-1.47,1.87,15.15,15.15,0,0,0,2-1.35,20.35,20.35,0,0,0,.64,4,20,20,0,0,0,.63-4,15.58,15.58,0,0,0,2,1.35A15.22,15.22,0,0,0,253.8,115.07Z" style={{fill:"#f1f1f1"}}/>
                        <path id="star3" d="M93.45,149.31a25.64,25.64,0,0,0,4.35-.59,25.1,25.1,0,0,0-4.35-.58,14.82,14.82,0,0,0,1.47-1.88,16.41,16.41,0,0,0-2,1.36,20,20,0,0,0-.63-4,20.37,20.37,0,0,0-.64,4,15.94,15.94,0,0,0-2-1.36,13.75,13.75,0,0,0,1.47,1.88,25.33,25.33,0,0,0-4.36.58,25.87,25.87,0,0,0,4.36.59,14.09,14.09,0,0,0-1.47,1.87,15.15,15.15,0,0,0,2-1.35,20.35,20.35,0,0,0,.64,4,20,20,0,0,0,.63-4,15.58,15.58,0,0,0,2,1.35A15.22,15.22,0,0,0,93.45,149.31Z" style={{fill:"#f1f1f1"}}/>
                        <path id="star4" d="M63.9,386.82a25.33,25.33,0,0,0,4.36-.58,25.87,25.87,0,0,0-4.36-.59,14.09,14.09,0,0,0,1.47-1.87,15.15,15.15,0,0,0-2,1.35,20.35,20.35,0,0,0-.64-4,20,20,0,0,0-.63,4,15.58,15.58,0,0,0-2-1.35,15.22,15.22,0,0,0,1.47,1.87,25.64,25.64,0,0,0-4.35.59,25.1,25.1,0,0,0,4.35.58A14.82,14.82,0,0,0,60,388.7a16.41,16.41,0,0,0,2-1.36,20,20,0,0,0,.63,4,20.37,20.37,0,0,0,.64-4,15.94,15.94,0,0,0,2,1.36A13.75,13.75,0,0,0,63.9,386.82Z" style={{fill:"#f1f1f1"}}/>
                        <path id="star5" d="M235.92,310a25.33,25.33,0,0,0,4.36-.58,25.87,25.87,0,0,0-4.36-.59,14.8,14.8,0,0,0,1.48-1.87,15.58,15.58,0,0,0-2,1.35,20,20,0,0,0-.63-4,20.35,20.35,0,0,0-.64,4,15.93,15.93,0,0,0-2-1.35,14.09,14.09,0,0,0,1.47,1.87,25.87,25.87,0,0,0-4.36.59,25.33,25.33,0,0,0,4.36.58,13.75,13.75,0,0,0-1.47,1.88,16.81,16.81,0,0,0,2-1.36,20.37,20.37,0,0,0,.64,4,20,20,0,0,0,.63-4,16.41,16.41,0,0,0,2,1.36A14.42,14.42,0,0,0,235.92,310Z" style={{fill:"#f1f1f1"}}/>
                        <path id="star6" d="M315.89,153.13a25.87,25.87,0,0,0,4.36-.59,25.33,25.33,0,0,0-4.36-.58,13.75,13.75,0,0,0,1.47-1.88,16.81,16.81,0,0,0-2,1.36,19.52,19.52,0,0,0-.64-4,20,20,0,0,0-.63,4,16.81,16.81,0,0,0-2-1.36A13.75,13.75,0,0,0,313.5,152a25.33,25.33,0,0,0-4.36.58,25.87,25.87,0,0,0,4.36.59A14.09,14.09,0,0,0,312,155a15.93,15.93,0,0,0,2-1.35,20,20,0,0,0,.63,4,19.5,19.5,0,0,0,.64-4,15.93,15.93,0,0,0,2,1.35A14.09,14.09,0,0,0,315.89,153.13Z" style={{fill:"#f1f1f1"}}/>
                    </g>
                    </g>
                    <g id="Rocket">
                        <path id="outerFire" d="M182.59,433.78H143s-16,12.19-8.13,41.2c0,0,4.61-12.44,11.38-9.51,0,0-.81,38.52,16.53,54.12,17.33-15.6,16.52-54.12,16.52-54.12,6.77-2.93,11.37,9.51,11.37,9.51C198.57,446,182.59,433.78,182.59,433.78Z" style={{fill:"#3f51b5"}}/>
                        <path id="innerFire" d="M172.75,433.78H153s-10.39,6.09-6.46,20.6c0,0,4.7-6.22,8.09-4.76,0,0-.41,19.26,8.26,27.06,8.67-7.8,8.26-27.06,8.26-27.06,3.39-1.46,8.26,4.76,8.26,4.76C183.31,439.87,172.75,433.78,172.75,433.78Z" style={{fill:"#f1f1f1"}}/>
                        <rect x="140.76" y="424.39" width="44.11" height="9.39" style={{fill:"gray"}}/>
                        <path d="M126.09,382.75s-13.49.6-18.43-8.74c0,0-26.84,41.6-4.47,89,0,0,8.71-41.61,33-52.28Z" style={{fill:"#3f51b5"}}/>
                        <path d="M199.58,382.75s13.49.6,18.43-8.74c0,0,26.84,41.6,4.47,89,0,0-8.71-41.61-33-52.28Z" style={{fill:"#004568"}}/>
                        <path d="M184.91,424.39c10.71-20.23,17.77-41.57,17.77-80.77,0-62.32-39.84-112.85-39.84-112.85S123,281.3,123,343.62c0,39.2,7.06,60.54,17.77,80.77Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M136,414.71c1.48,3.29,3.08,6.5,4.76,9.68h44.15c1.68-3.18,3.27-6.39,4.76-9.68Z" style={{fill:"#3f51b5"}}/>
                        <path d="M189.1,278.1c-11.55-28.64-26.26-47.33-26.26-47.33s-14.72,18.69-26.27,47.33Z" style={{fill:"#3f51b5"}}/>
                        <path d="M158.4,418.5a228,228,0,0,0,4.44,44.5,228.48,228.48,0,0,0,4.43-44.5c0-24.57-2-44.49-4.43-44.49S158.4,393.93,158.4,418.5Z" style={{fill:"#3f51b5"}}/>
                        <path d="M181.62,316.29c0,9.8-8.41,17.74-18.78,17.74s-18.79-7.94-18.79-17.74,8.41-17.75,18.79-17.75S181.62,306.48,181.62,316.29Z" style={{fill:"#3f51b5"}}/>
                        <path d="M176.69,316.29c0,7.23-6.2,13.09-13.85,13.09S149,323.52,149,316.29s6.2-13.1,13.86-13.1S176.69,309.05,176.69,316.29Z" style={{fill:"#00536e"}}/>
                    <g style={{mixBlendMode:"multiply"}}>
                        <path d="M166.73,433.78h18.14v-9.39H167.18C167.09,427.64,166.93,430.78,166.73,433.78Z" style={{fill:"gray"}}/>
                        <path d="M218,374c-4.94,9.34-18.43,8.74-18.43,8.74h0a134.52,134.52,0,0,1-8.5,28.72c23.06,11.73,31.4,51.52,31.4,51.52C244.85,415.61,218,374,218,374Z" style={{fill:"#3f51b5"}}/>
                        <path d="M163.21,231.26l.2.27Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M162.9,230.85a.59.59,0,0,0,.08.11Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M202.68,343.62c0-55.28-31.32-101.24-38.41-110.93A219,219,0,0,1,189.1,278.1H162.84v20.44c10.37,0,18.78,7.94,18.78,17.75S173.21,334,162.84,334v40c2.32,0,4.22,17.9,4.41,40.7h22.42c.48-1.07,1-2.15,1.41-3.23a134.52,134.52,0,0,0,8.5-28.72A218.14,218.14,0,0,0,202.68,343.62Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M187.26,419.79q-1.14,2.31-2.35,4.6Q186.13,422.1,187.26,419.79Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M163.58,231.75l.69.93Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M189.67,414.72q-1.08,2.37-2.22,4.69Q188.59,417.09,189.67,414.72Z" style={{fill:"#fcfdf2"}}/>
                        <path d="M164.27,232.69h0l-.69-.93-.17-.22-.2-.27c-.1-.12-.17-.22-.23-.3a.59.59,0,0,1-.08-.11l-.06-.08V278.1H189.1A219,219,0,0,0,164.27,232.69Z" style={{fill:"#3f51b5"}}/>
                        <path d="M162.84,374v89a219.92,219.92,0,0,0,3.89-29.22c.2-3,.36-6.14.45-9.39h17.73q1.22-2.29,2.35-4.6l.19-.38q1.14-2.32,2.22-4.69H167.25C167.06,391.91,165.16,374,162.84,374Z" style={{fill:"#3f51b5"}}/>
                        <path d="M181.62,316.29c0-9.81-8.41-17.75-18.78-17.75v4.65c7.65,0,13.85,5.86,13.85,13.1s-6.2,13.09-13.85,13.09V334C173.21,334,181.62,326.09,181.62,316.29Z" style={{fill:"#3f51b5"}}/>
                        <path d="M176.69,316.29c0-7.24-6.2-13.1-13.85-13.1v26.19C170.49,329.38,176.69,323.52,176.69,316.29Z" style={{fill:"#00536e"}}/>
                    </g>
                    <g id="Paperly">
                    <text/>
                    <g id="PaperlyLogo">
                    <g id="Paperly_logo">
                    <g id="part3">
                        <path d="M170.42,310.6a.57.57,0,0,0-.29-.47l-.3-.14h0l-.3-.14-9.71-4.61c-.17-.08-.2,0-.08.1l4.45,5.15a1.51,1.51,0,0,0,.51.39l3,1.44.29.14.3.14,1.27.61.57.27c.15.07.28,0,.28-.2Z" style={{fill:"#fff"}}/>
                    </g>
                    <g id="part2">
                        <path d="M159.9,305.74c-.13-.16-.25-.12-.25.09v21.28c0,.21.11.25.25.09l2.7-3.2a1.24,1.24,0,0,0,.24-.66V309.5a1.14,1.14,0,0,0-.25-.66Z" style={{fill:"#fff"}}/>
                    </g>
                    <g id="part1">
                        <path d="M170.64,310.11c0-.21-.15-.3-.33-.2l-14,7.29a.2.2,0,0,0,0,.38l2.5,1.6a.74.74,0,0,0,.65,0l10.86-5.68a.68.68,0,0,0,.33-.55Z" style={{fill:"#31c4f3"}}/>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                    </svg>
                        <div className="title">
                            <Hidden smDown>
                                <Typography variant="h3" align="center">
                                    <div style={{fontFamily:"titleFont"}}>
                                        <b>SKYROCKET YOUR PERFORMANCE WITH <span style={{color:"#1fa2ff"}}>PAPERLY</span></b>
                                    </div>
                                </Typography>
                            </Hidden>
                            <Hidden mdUp>
                                <Typography variant="h6" align="center">
                                    <div style={{  fontFamily:"titleFont",paddingLeft:'15px',paddingRight:"15px",paddingBottom:"20px"}}>
                                        <b>SKYROCKET YOUR PERFORMANCE WITH <span style={{color:"#1fa2ff"}}>PAPERLY</span></b>
                                    </div>
                                </Typography>
                            </Hidden>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}

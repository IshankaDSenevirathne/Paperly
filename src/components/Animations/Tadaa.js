import React,{useEffect} from 'react'
import {TimelineMax,Bounce,Power1 } from 'gsap';

export default function Tadaa() {

    useEffect(()=>{
        var tl=new TimelineMax();
        tl.from("#confetti",1,{y:"-350",opacity:0,rotation:20,transformOrigin:"50% 50%",ease:Bounce.easeOut});
        tl.to("#star3",1,{x:"-150",opacity:1,rotation:640,transformOrigin:"50% 50%",ease:Power1.easeOut});
        tl.to("#star2",1,{x:"-40",y:"-20",opacity:1,rotation:640,transformOrigin:"50% 50%",ease:Power1.easeOut},'-=.9');
        tl.to("#star1",1,{x:"-120",y:"-170",opacity:1,rotation:640,transformOrigin:"50% 50%",ease:Power1.easeOut},'-=.9');
        tl.to("#fireball1",1,{x:"-90",y:"-100",opacity:1,ease:Power1.easeOut},'-=.9');
        tl.to("#fireball2",1,{x:"-40",y:"-100",opacity:1,ease:Power1.easeOut},'-=.9');
        tl.to("#fireball3",1,{x:"-140",y:"-70",opacity:1,ease:Power1.easeOut},'-=.9');
    },[])

    return (
        <div style={{maxWidth:"100%",textAlign:"center"}}>
            <svg width="100%" height="413" viewBox="0 0 350 413">
                <title>Layer 1</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g id="confetti"><rect width="350" height="413" style={{fill:"none"}}/>
                            <g id="fireworks">
                                <path id="fireball3" d="M292.71,350.91,219.1,316.56A5.83,5.83,0,0,1,224,306a5.68,5.68,0,0,1,.73.4Z" style={{fill:"#ff7c5e"}}/>
                                <path id="fireball2" d="M286.18,354l-44-68.44A5.81,5.81,0,1,1,252.34,280Z" style={{fill:"#ff7c5e"}}/>
                                <path id="fireball1" d="M280.11,345.56l-41.49-40.45a5.83,5.83,0,0,1,8.12-8.38,5.78,5.78,0,0,1,.75.9Z" style={{fill:"#ffca57"}}/>
                                <polygon id="star3" points="241.07 309.59 232.43 307.38 239.44 301.84 238.86 292.91 246.28 297.88 254.56 294.57 252.14 303.18 257.84 310.07 248.93 310.42 244.16 317.98 241.07 309.59" style={{fill:"#ff7c5e"}}/>
                                <polygon id="star2" points="247.75 291.1 241.26 284.96 250.07 283.53 253.88 275.44 257.96 283.4 266.81 284.54 260.53 290.89 262.18 299.68 254.22 295.65 246.39 299.95 247.75 291.1" style={{fill:"#ffca57"}}/>
                                <polygon id="star1" points="235.79 320.29 231.97 328.38 227.9 320.42 219.05 319.28 225.33 312.93 223.68 304.14 231.64 308.17 239.47 303.87 238.1 312.72 244.59 318.86 235.79 320.29" style={{fill:"#ffca57"}}/>
                            </g>
                            <g id="cone"><polyline points="303.66 364.05 256.56 259.72 199.66 316.8 303.66 364.05" style={{fill:"#ff7c5e"}}/>
                                <polygon points="231.74 331.37 258.42 263.84 256.56 259.72 248 268.3 224.4 328.04 231.74 331.37" style={{fill:"#ffca57"}}/>
                                <polygon points="290.95 335.9 283.45 354.87 290.79 358.21 295.56 346.12 290.95 335.9" style={{fill:"#ffca57"}}/>
                                <polygon points="281.66 315.33 268.69 348.16 276.03 351.5 286.28 325.55 281.66 315.33" style={{fill:"#ffca57"}}/>
                                <polygon points="272.38 294.76 253.93 341.45 261.26 344.79 276.99 304.98 272.38 294.76" style={{fill:"#ffca57"}}/>
                                <polygon points="263.09 274.19 239.16 334.75 246.5 338.08 267.7 284.41 263.09 274.19" style={{fill:"#ffca57"}}/>
                                <polygon points="219.15 297.24 209.63 321.33 216.97 324.66 233.49 282.86 219.15 297.24" style={{fill:"#ffca57"}}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}
import React,{useEffect} from 'react';
import {TimelineMax,Power1} from "gsap";

export default function Coffee() {

    useEffect(()=>{
        const tl = new TimelineMax();
        tl.to("#smoke1",{y:"-50",duration:"3",scaleX:0,transformOrigin:"50% 50%",repeat:-1,opacity:0,ease:Power1.easeOut});
        tl.to("#smoke2",{y:"-70",duration:"3",scaleX:0,opacity:0,rotationY:360,repeat:-1,ease:Power1.easeOut},'-=2.8');
        tl.to("#smoke3",{y:"-70",duration:"3",scaleX:0,opacity:0,rotationY:360,repeat:-1,ease:Power1.easeOut},'-=2');
    },[])

    return (
        <div>
            <svg width="64.52" height="111.4" viewBox="0 0 64.52 111.4">
                <title>Coffeemug</title>
                <g style={{isolation:"isolate"}}>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <g id="Coffeemug">
                                <rect width="64.52" height="111.4" style={{fill:"none"}}/>
                                <g id="smoke2" style={{opacity:"0.74"}}>
                                    <path d="M38.45,79.15C36.1,84.5,20.21,84,21.43,90.91a5.07,5.07,0,0,1-1.85-5.51c1.08-2.44,5-3.4,7.19-4.34,3.13-1.36,6.51-2.31,6.25-6.52-.35-3.44-3.12-6.89-6.19-8.69A16.3,16.3,0,0,1,35.91,70C38.21,72,40,75.59,38.45,79.15Z" style={{fill:"#f3f3f3"}}/>
                                </g>
                                <g id="smoke1" style={{opacity:"0.74"}}>
                                    <path d="M36.82,89.27c-1.75.68-7.55,2.75-9,5.37-1.35-.77-2.54-1.8-2.54-3.07,0-2.71,3.66-3.52,5.56-4.07C35.24,86,40.18,84.79,41.23,80,42,84.29,42.06,87.24,36.82,89.27Z" style={{fill:"#f3f3f3"}}/>
                                </g>
                                <g id="smoke3" style={{opacity:"0.74"}}>
                                    <path d="M38.45,79.15C36.1,84.5,20.21,84,21.43,90.91a5.07,5.07,0,0,1-1.85-5.51c1.08-2.44,5-3.4,7.19-4.34,3.13-1.36,6.51-2.31,6.25-6.52-.35-3.44-3.12-6.89-6.19-8.69A16.3,16.3,0,0,1,35.91,70C38.21,72,40,75.59,38.45,79.15Z" style={{fill:"#f3f3f3"}}/>
                                </g>
                                <path d="M48.05,70v-6.7H8.5V111.4H48.05V103a16.47,16.47,0,0,0,0-32.94Zm0,27.05V75.9a10.58,10.58,0,1,1,0,21.16Z" style={{fill:"#4e9ad4"}}/>
                                <path d="M48.05,70v-6.7H34.63V111.4H48.05V103a16.47,16.47,0,0,0,0-32.94Zm0,27.05V75.9a10.58,10.58,0,0,1,0,21.16Z" style={{fill:"#ccc",opacity:"0.45",mixBlendMode:"multiply"}}/>
                                <g id="card">
                                    <path d="M11.27,75.52V87.33a.76.76,0,0,0,.76.76H23.57a.76.76,0,0,0,.76-.76V75.52a.76.76,0,0,0-.21-.52l0,0L19.25,70h-2.9L11.52,75l0,0A.76.76,0,0,0,11.27,75.52Z" style={{fill:"#64cae1"}}/>
                                    <path d="M12.71,85.66a.76.76,0,0,0,.77.76h8.37a.76.76,0,0,0,.76-.76V77.09a.76.76,0,0,0-.76-.76H13.48a.76.76,0,0,0-.77.76Z" style={{fill:"#2a3136"}}/>
                                </g>
                                <rect x="8.5" y="63.31" width="39.54" height="1.63" style={{fill:"#e5e5e5"}}/>
                                <path d="M18.62,70.32c-.46-1-1.82-3.93,1.25-3.3a11.12,11.12,0,0,0,2.74.44,2.29,2.29,0,0,0,2.29-1.78c.34-2.63-3.14-3.8-5.09-3-1,.43-.09,1.09.66.76,1.09-.46,2.2.6,2.65,1.52.92,1.87-1.2,1.36-2.31,1.07a3.71,3.71,0,0,0-3.62.82c-1.22,1.25-.81,2.39-.14,3.85.28.61,1.82.13,1.57-.42Z" style={{fill:"#fff"}}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

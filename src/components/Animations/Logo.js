import React,{useEffect} from 'react'
import {TimelineMax,Power1} from "gsap/dist/gsap";

export default function Logo() {
    useEffect(()=>{
        const tl = new TimelineMax();
        tl.set("#part1",{x:200,opacity:0}).set("#part2",{x:-200,opacity:0}).set("#part3",{y:-200,opacity:0}).to("#part1",{ x:0,duration:2,opacity:1,ease:Power1.easeInOut}).to("#part2",{ x:0,duration:2,opacity:1,ease:Power1.easeInOut},'-=1.7').to("#part3",{ y:0,duration:2,opacity:1,ease:Power1.easeInOut},'-=1.7');
    },[])
    return (
        <div>
            <svg width="100%" height="500" viewBox="0 0 584.03 500"><title>Paperly (6)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><g id="PaperlyLogo"><g id="Paperly_logo"><g id="part3"><path d="M483.43,149.9c0-4.75-3.34-10.24-7.43-12.21L468.26,134l-.31-.16s-3.5-1.7-7.78-3.76L206.9,8.28c-4.28-2-5.26-.78-2.17,2.83l116,135.83a49,49,0,0,0,13.39,10.3L412.75,195c4.28,2.06,7.78,3.76,7.76,3.78s3.48,1.74,7.76,3.8l33.18,16,14.88,7.16c3.91,1.88,7.1-.46,7.1-5.21Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M209.3,21.77c-3.54-4.12-6.43-3.05-6.43,2.38V585.59c0,5.43,2.85,6.46,6.32,2.29l70.4-84.36a31.72,31.72,0,0,0,6.32-17.45V120.94a31,31,0,0,0-6.42-17.36Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M489.31,137c0-5.43-3.93-7.8-8.73-5.26L115.89,324.2c-4.8,2.54-5,7-.44,10l65.22,42.11c4.56,3,12.22,3.28,17,.75L480.61,227.46c4.8-2.54,8.72-9.05,8.72-14.48Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>
        </div>
    )
}

import React,{useEffect} from 'react'
import {TimelineMax,Circ, Power1} from "gsap/dist/gsap";
import "./Logo.css"

export default function Logo() {
    useEffect(()=>{
        const tl = new TimelineMax();
        tl
        .set("#title",{opacity:0})
        .set(".cir",{opacity:1,transformOrigin: "center"})
        .set("#circle1",{x:-150,opacity:0,scale:0.8})
        .set("#circle2",{x:150,opacity:0,scale:0.9})
        .set("#part1",{x:200,opacity:0})
        .set("#part2",{x:-200,opacity:0})
        .set("#part3",{y:-200,opacity:0})
        .to("#part1",{ x:0,duration:1.5,opacity:1,ease:Circ.easeOut})
        .to("#part2",{ x:0,duration:1.5,opacity:1,ease:Circ.easeOut},'-=1.3')
        .to("#part3",{ y:0,duration:1.5,opacity:1,ease:Circ.easeOut},'-=1.4')
        .to("#circle1",{duration:1.5,y:0,x:0,opacity:0.1,ease:Circ.easeOut,scale:0.8})
        .to("#circle2",{duration:1.5,x:0,opacity:0.12,ease:Circ.easeOut},'-=1.4')
        .to("#title",{duration:2,opacity:1,ease:Power1.easeInOut},'-=1.7')

    },[])
    return (
        <div>
            <div className="logo">
                <svg  width="100%" height="100%" viewBox="0 0 517.64 501.52"><title>Paperly (9)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Paperly"><text/><g id="PaperlyLogo"><g id="Paperly_logo"><g id="circle1" style={{opacity:"0.07"}}><circle cx="193.15" cy="301.79" r="193.15" style={{fill:"#dce3e5"}}/></g><g id="circle2" style={{opacity:"0.19"}}><circle cx="404.18" cy="80.89" r="46.46" style={{fill:"#edefef"}}/></g><g id="part3"><path d="M394.47,150a10,10,0,0,0-5.08-8.3l-5.3-2.52-.22-.11s-2.39-1.15-5.31-2.54L205.06,54.05c-2.92-1.39-3.58-.52-1.47,1.92L283,147.91a33.7,33.7,0,0,0,9.16,7l53.89,25.6c2.92,1.39,5.3,2.54,5.29,2.56s2.38,1.16,5.3,2.55l22.76,10.84,10.17,4.84c2.68,1.27,4.86-.34,4.86-3.57Z" style={{fill:"#fff"}}/></g><g id="part2"><path d="M206.72,63.19c-2.42-2.79-4.4-2-4.4,1.64v380c0,3.7,2,4.41,4.33,1.59l48.21-57.1a21.39,21.39,0,0,0,4.33-11.85V130.35a20.93,20.93,0,0,0-4.4-11.79Z" style={{fill:"#fff"}}/></g><g id="part1"><path d="M398.5,141.22c0-3.7-2.69-5.32-6-3.61L142.73,267.92c-3.28,1.71-3.41,4.73-.3,6.72l44.7,28.52a12.87,12.87,0,0,0,11.62.51L392.56,202.41a12.23,12.23,0,0,0,5.95-9.83Z" style={{fill:"#31c5f4"}}/></g></g></g></g></g></g></svg>
            </div>
            <div>
                <svg width="100%" height="100.41" viewBox="0 0 497.55 100.41"><title>title</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><text id="title" transform="translate(11.26 39.32)" style={{fontSize:"48px",fill:"#fff",fontFamily:"Consolas-Bold, Consolas",fontWeight:"700"}}>WELCOME TO <tspan x="290.3" y="0" style={{fill:"#4e9ad4"}}>PAPERLY</tspan></text></g></g></svg>
            </div>
        </div>
    )
}


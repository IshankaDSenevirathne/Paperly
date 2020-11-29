import React,{useState,useEffect} from 'react'
import Confetti from 'react-confetti'

//get window dimensions
const getWindowDimensions=()=>{
    const {innerWidth:width,innerHeight:height}=window;
    return{
        width,height
    }
}

export default function Tadaaa(){
  const [windowDimensions,setWindowDimensions]=useState(getWindowDimensions());
  useEffect(()=>{
    const handleResize=()=>{
        setWindowDimensions(getWindowDimensions);
    }
    window.addEventListener('resize',handleResize);
    return()=>window.removeEventListener('resize',handleResize);
  },[])
  return (
    <Confetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      numberOfPieces={300}
      recycle={false}
    />
  )
}

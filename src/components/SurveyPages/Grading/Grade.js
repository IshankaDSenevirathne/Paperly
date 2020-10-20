import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

//Grade Images
import Ap from "../../../img/A+.svg";
import A from "../../../img/A.svg";
import B from "../../../img/B.svg";
import C from "../../../img/C.svg";
import S from "../../../img/S.svg";
import F from "../../../img/F.svg";


export default function Grade(props) {
    const {marks}=props;
    const getGrade=(marks)=>{
        if(marks>=90){
            return (
                <div>
                  <img src={Ap}></img>
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>EXCELLENT !</b>
                  </Typography>  
                </div>
            );
        }
        else if(marks>=75 && marks< 90){
            return (
                <div>
                  <img src={A}></img> 
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>NICE JOB !</b>
                  </Typography> 
                </div>
            );
        }
        else if(marks>=65 && marks < 75){
            return (
                <div>
                  <img src={B}></img>
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>GOOD !</b>
                  </Typography>  
                </div>
            );
        }
        else if(marks >=55 && marks <65){
            return (
                <div>
                  <img src={C}></img>
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>OKAY !</b>
                  </Typography>  
                </div>
            );
        }
        else if(marks >=35 && marks < 55){
            return (
                <div>
                  <img src={S}></img>
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>FINE !</b>
                  </Typography>  
                </div>
            );
        }
        else{
            return (
                <div>
                  <img src={F}></img>
                  <br></br>
                  <Typography style={{paddingTop:"10px",paddingBottom:"10px"}} gutterBottom variant="h6" align="center">
                    <b>TRY AGAIN !</b>
                  </Typography>  
                </div>
            );
        }
    }
    return (
        <div style={{color:"white"}}>
            {getGrade(marks)}
        </div>
    )
}

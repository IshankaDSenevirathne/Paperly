import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

export default function Changelog() {
    return (
        <div className="content" style={{paddingTop:"50px",paddingBottom:"50px"}}>
            <Typography variant="h6" align="left" >
                <i>CHANGE LOG</i>
            </Typography>
            <Typography variant="subtitle2" align="left" >
                <i>...list of changes will be displayed here</i>
            </Typography>
        </div>
    )
}

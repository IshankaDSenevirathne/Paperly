import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

export default function Announcements() {
    return (
        <div style={{paddingTop:"50px"}}>
            <Typography variant="h4" align="center">
                ANNOUNCEMENTS
            </Typography>
            <Typography variant="subtitle2" align="center" >
                <i>...latest features and news will be displayed here</i>
            </Typography>
        </div>
    )
}

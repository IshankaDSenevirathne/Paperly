import React from 'react'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

export default function Announcements() {
    return (
        <div className="content" style={{paddingTop:"50px"}}>
            <Typography variant="h5" align="left">
                FEEDBACK FROM OUR USERS
            </Typography>
            <Typography variant="subtitle2" align="left" >
                <i>...some user feedback will be displayed here</i>
            </Typography>
        </div>
    )
}

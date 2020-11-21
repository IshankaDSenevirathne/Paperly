import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import PostTemp from "./PostTemp";

const postData=[
    { 
        name:"Rajitha Gunathilake",
        message:"They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
    },
    { 
        name:"Rajitha Senarathne",
        message:"They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
    },
    { 
        name:"Rajitha Sandaruwan",
        message:"They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
    },
]

export default function Announcements() {
    return (
        <div className="content" style={{paddingTop:"50px"}}>
            <Typography variant="h6" align="left">
                RECENT FEEDBACK FROM OUR USERS,
            </Typography>
           <div style={{paddingTop:"50px",paddingBottom:"50px"}}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item sm={12}>
                        <PostTemp name={postData[0].name} message={postData[0].message}/>
                    </Grid>
                    <Grid item sm={12}>
                        <PostTemp name={postData[1].name} message={postData[1].message}/>
                    </Grid>
                    <Grid item sm={12}>
                        <PostTemp name={postData[2].name} message={postData[2].message}/>
                    </Grid>
                </Grid>
           </div>
        </div>
    )
}

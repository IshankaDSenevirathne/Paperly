import React from 'react'

import Grid from "@material-ui/core/Grid";
import Logo from "../../Animations/Logo";





export default function BannerHome() {
    return (
        <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <Grid container  direction="column" justify="space-around" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item  justify="center">
                    <Logo />                           
                </Grid>
            </Grid>
        </div>
    )
}

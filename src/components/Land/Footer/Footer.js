import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FaceBook from "../../../img/icons/fb.png";
import GitHub from "../../../img/icons/github.png";
import Twitter from "../../../img/icons/twitter.png";

import Coffee from  "../../Animations/Coffee";

import "./Footer.css";
const Footer = () => {

  return (
    <div style={{width:'100%',background:"#363f44",paddingTop:"50px",paddingBottom:"100px",position:"absolute",bottom:"-100"}}>
      <footer>

        <Hidden xsDown>
          <Container>
            <div style={{borderBottom:"1px solid grey"}}>
              <Grid container alignItems="flex-start" justify="space-between">
                <Grid md={8} item justify="flex-start">
                  <div style={{paddingBottom:"20px"}}>
                    <Typography variant="h6" align="left">
                      WE TRY TO MAKE AWSOME SOFTWARE.
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Coffee />
                    <Typography variant="subtitle1" align="left">
                      MADE WITH LOVE AND COFFEE
                    </Typography>
                  </div>
                </Grid>
                <Grid md={4} item  justify="flex-end">
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle1" align="left">
                      ABOUT US
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      We are just a small group of individuals trying to take the great minds of Sri Lanka where it belongs. 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle1" align="left">
                      CONTACT US
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Paperlytech@gmail.com 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle1" align="left">
                      TERMS OF SERVICE
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid
                container
                alignItems="center"
                justify="space-between"
              >
              <Grid item justify="flex-start">
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link className="paperly_footer_link" href="/">Paperly LLC .</Link>
                </p>
              </Grid>
              <Grid item justify="flex-end">
                    <Link  href="/">
                      <img className="socialicons" src={FaceBook}></img>
                    </Link>
                    <Link href="/">
                      <img className="socialicons" src={Twitter}></img>
                    </Link>
                    <Link href="/">
                      <img className="socialicons" src={GitHub}></img>
                    </Link>
              </Grid>
            </Grid>
            </div>
          </Container>
        </Hidden>
        <Hidden smUp>
          <Container>
            <div style={{textAlign:'center'}}>
              <div>
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link href="/">Paperly LLC .</Link>
                </p>
              </div>
              <div>
                <Link  href="/">
                  <img  src={FaceBook}></img>
                </Link>
                <Link href="/">
                  <img src={Twitter}></img>
                </Link>
                <Link href="/">
                  <img src={GitHub}></img>
                </Link>
              </div>
            </div>
          </Container>
        </Hidden>
      </footer>
    </div>

  );
};
export default Footer;

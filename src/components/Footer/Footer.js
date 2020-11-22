import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FaceBook from "../../img/icons/facebook.svg";
import GitHub from "../../img/icons/github.svg";
import Twitter from "../../img/icons/twitter.svg";
import Reddit from "../../img/icons/reddit.svg";
import Instagram from "../../img/icons/instagram.svg";

import Coffee from  "../Animations/Coffee";

import "./Footer.css";
const Footer = () => {

  return (
    <div style={{color:"#ffffff",width:'100%',background:"#363f44",paddingTop:"50px",paddingBottom:"100px",position:"absolute",bottom:"-100"}}>
      <footer>
        <Hidden xsDown>
          <Container>
            <div style={{borderBottom:"1px solid grey"}}>
              <Grid container alignItems="flex-start" justify="space-between">
                <Grid sm={6} md={8} item >
                  <div>
                    <Typography variant="h6" align="left">
                      WE TRY TO MAKE AWSOME SOFTWARE.
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Coffee />
                    <Typography variant="body2" align="left">
                      <span style={{color:"#1fa2ff"}}>MADE WITH LOVE AND COFFEE</span>
                    </Typography>
                  </div>
                </Grid>
                <Grid sm={4} md={4} item >
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
                      ABOUT US
                    </Typography>
                    <Typography variant="body2" align="left">
                      <span style={{color:"#CCCDCD"}}>We are just a small group of individuals trying to take the great minds of Sri Lanka where it belongs.</span> 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
                      CONTACT US
                    </Typography>
                    <Typography variant="body2" align="left">
                      <span style={{color:"#CCCDCD"}}>Paperlytech@gmail.com</span> 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
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
              <Grid item>
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link className="paperly_footer_link" href="/">Paperly LLC .</Link>
                </p>
              </Grid>
              <Grid item>
                    <Link target="_blank"  href="https://www.facebook.com/Paperly-110864100824156">
                      <img className="socialicons" src={FaceBook}></img>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link target="_blank" href="https://twitter.com/paperlytech">
                      <img className="socialicons" src={Twitter}></img>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link target="_blank" href="https://www.instagram.com/paperly.tech/">
                      <img className="socialicons" src={Instagram}></img>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link target="_blank" href="https://www.reddit.com/user/paperlytech">
                      <img className="socialicons" src={Reddit}></img>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link target="_blank" href="https://github.com/IshankaDSenevirathne/Paperly">
                      <img className="socialicons" src={GitHub}></img>
                    </Link>
              </Grid>
            </Grid>
            </div>
          </Container>
        </Hidden>
        <Hidden smUp>
          <Container>
            <div style={{borderBottom:"1px solid grey"}}>
              <Grid container justify="flex-start">
                <Grid sm={6} md={8} item >
                  <div>
                    <Typography variant="h6" align="left">
                      WE TRY TO MAKE AWSOME SOFTWARE.
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Coffee />
                    <Typography variant="body2" align="left">
                      <span style={{color:"#1fa2ff"}}>MADE WITH LOVE AND COFFEE</span>
                    </Typography>
                  </div>
                </Grid>
                <Grid sm={4} md={4} item  >
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
                      ABOUT US
                    </Typography>
                    <Typography variant="body2" align="left">
                      <span style={{color:"#CCCDCD"}}>We are just a small group of individuals trying to take the great minds of Sri Lanka where it belongs.</span> 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
                      CONTACT US
                    </Typography>
                    <Typography variant="body2" align="left">
                      <span style={{color:"#CCCDCD"}}>Paperlytech@gmail.com</span> 
                    </Typography>
                  </div>
                  <div style={{paddingBottom:"10px"}}>
                    <Typography variant="subtitle2" align="left">
                      TERMS OF SERVICE
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div style={{textAlign:'center'}}>
              <div>
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link href="/">Paperly LLC .</Link>
                </p>
              </div>
              <div>
                  <Link target="_blank"  href="https://www.facebook.com/Paperly-110864100824156">
                    <img src={FaceBook}></img>
                  </Link>
                  &nbsp;
                  &nbsp;
                  <Link target="_blank" href="https://twitter.com/paperlytech">
                    <img src={Twitter}></img>
                  </Link>
                  &nbsp;
                  &nbsp;
                  <Link target="_blank" href="https://www.instagram.com/paperly.tech/">
                    <img src={Instagram}></img>
                  </Link>
                  &nbsp;
                  &nbsp;
                  <Link target="_blank" href="https://www.reddit.com/user/paperlytech">
                    <img src={Reddit}></img>
                  </Link>
                  &nbsp;
                  &nbsp;
                  <Link target="_blank" href="https://github.com/IshankaDSenevirathne/Paperly">
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

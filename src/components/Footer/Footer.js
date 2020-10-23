import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import { Container } from "@material-ui/core";
import FaceBook from "../../img/icons/fb.png";
import GitHub from "../../img/icons/github.png";
import Twitter from "../../img/icons/twitter.png";

import "./Footer.css";
const Footer = () => {

  return (
    <div style={{width:'100%',background:"#363f44",paddingTop:"50px",paddingBottom:"100px",position:"absolute",bottom:"-100"}}>
      <footer>
        <Hidden xsDown>
          <Container>
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

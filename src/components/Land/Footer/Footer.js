import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";
import "./Footer.css";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: "auto",
    // height: "35vh",
    //     backgroundatt -attachment: fixed;
    // background-size: cover;
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div class="custom-shape-divider-top-1601399103">
      {/*<svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        // fill="#1fa2ff"
        transform="rotate(180)"
        className='svgwave'
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>*/}
      <footer className="site-footer">
        <Container>
          <Container>
            <div className="row">
              <Grid sm="12" md="6">
                <h6>We try to make awesome software</h6>
                {/* <p className="text-justify">   
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p> */}
              </Grid>
              <Grid xs="0" md="3"></Grid>
              {/* <Grid xs="6" md="3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a  href="c-language/">C</a>
                </li>
                <li>
                  <a href="front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="android/">Android</a>
                </li>
                <li>
                  <a href="templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </Grid> */}

              <Grid xs="6" md="3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/terms">Terms of Service</a>
                  </li>
                </ul>
              </Grid>
              <Divider
                style={{
                  marginTop: "24px",
                  marginBottom: "24px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTopColor: "#bbb",
                  opacity: "0.5",
                  paddingLeft: "0 !important",
                  paddingRight: "0",
                }}
              />
            </div>
          </Container>

          <Container>
            <div className="row">
              <Grid
                className="copyright-grid"
                container
                alignItems="center"
                md="8"
                sm="6"
                xs="12"
              >
                <p className="copyright-text">
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <a href="/">EduEra LLC</a>.
                </p>
              </Grid>

              <Grid md="4" sm="6" xs="12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <i className="fa icon-footer fa-facebook"></i>
                      {/* <i className="fab fa-facebook-f"></i> */}
                    </a>
                  </li>
                  <li>
                    <a className="facebook" href="#">
                      {/* <i className="fa icon-footer fa-facebook"></i> */}
                      <i className="fa icon-footer fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fa icon-footer fa-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i class=" fa-3x fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li> */}
                </ul>
              </Grid>
            </div>
          </Container>
        </Container>
      </footer>{" "}
    </div>
  );
};
export default Footer;

/**

  <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="c-language/">C</a></li>
              <li><a href="front-end-development/">UI Design</a></li>
              <li><a href="back-end-development/">PHP</a></li>
              <li><a href="java-programming-language/">Java</a></li>
              <li><a href="android/">Android</a></li>
              <li><a href="templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>

        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

 */

//*old

/* <footer classNameName={classNamees.footer}>
        <div className="footerdiv">
          <div className="footerinner">
            <Copyright />
            <Divider style={{ margin: "24px auto", width: "60%" }} />
            <Grid
              container
              justify={"center"}
              alignItems={"center"}
              spacing={0}
            >
              <a href="/">
                <i class=" icons fa-3x fab fa-github"></i>
              </a>

              <Grid item xs={12} sm={6} md={3}>
                <a className="linkanchor" href="/terms">
                  <WhiteTextTypography
                    style={{ fontSize: "1.2rem" }}
                    align={"center"}
                    gutterBottom
                    color={"textSecondary"}
                  >
                    Terms & Conditions{" "}
                  </WhiteTextTypography>
                </a>
              </Grid>

              <a href="/">
                <i class="  icons fa-3x fab fa-facebook-f"></i>
              </a>
            </Grid>{" "}
          </div>
        </div>
      </footer> */

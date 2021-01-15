import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Rocket from "../../Animations/Rocket";
import RocketWave from "../../../img/rocketWave.svg";

import directionals from "../../../img/directionals.svg";

import { art, commerce, science, other } from "../../../paperdata/papers";

const useStyles = makeStyles(() => ({
  button: {
    color: "#EDEDED",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    transition: "0.5s ease-in-out",
    width: "100%",
    minHeight: "200px",
    "&:hover": {
      background: "#3f51b5",
      color: "#ffffff",
    },
  },
  paper: {
    background: "#363f44",
    borderRadius: "0px",
    textAlign: "center",
  },
}));

export default function Categories() {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          background: "#2a3136",
          backgroundImage: `url(${RocketWave})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "50px",
          textAlign: "left",
        }}
      >
        <Rocket />
      </div>
      <Container>
        <div style={{ textAlign: "center" }} id="subjects">
          <Typography variant="h4">CATEGORIES</Typography>
          <img src={directionals} />
        </div>
        <div id="science" style={{ marginTop: "50px", paddingBottom: "50px" }}>
          <div style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" align="left">
              SCIENCE
            </Typography>
          </div>
          <Grid alignItems="center" justify="flex-start" spacing={1} container>
            {science.map((subject) => (
              <Grid key={subject.title} item xs={6} sm={3} md={3}>
                <div>
                  <Paper elevation={2} className={classes.paper}>
                    <Link
                      href={`/quizes?subject=${subject.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button className={classes.button}>
                        <div>
                          <img
                            data-cy={`submit-${subject.title}`}
                            src={subject.image}
                          ></img>
                          <Typography align="center" variant="subtitle1">
                            {subject.title}
                          </Typography>
                        </div>
                      </Button>
                    </Link>
                  </Paper>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="art" style={{ paddingBottom: "50px" }}>
          <div style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" align="left">
              ART
            </Typography>
          </div>
          <Grid alignItems="center" justify="flex-start" spacing={1} container>
            {art.map((subject) => (
              <Grid key={subject.title} item xs={6} sm={3} md={3}>
                <div>
                  <Paper elevation={2} className={classes.paper}>
                    <Link
                      to={`/quizes?subject=${subject.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button className={classes.button}>
                        <div>
                          <img src={subject.image}></img>
                          <Typography align="center" variant="subtitle1">
                            {subject.title}
                          </Typography>
                        </div>
                      </Button>
                    </Link>
                  </Paper>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="commerce" style={{ paddingBottom: "50px" }}>
          <div style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" align="left">
              COMMERCE
            </Typography>
          </div>
          <Grid alignItems="center" justify="flex-start" spacing={1} container>
            {commerce.map((subject) => (
              <Grid key={subject.title} item xs={6} sm={3} md={3}>
                <div>
                  <Paper elevation={2} className={classes.paper}>
                    <Link
                      to={`/quizes?subject=${subject.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button className={classes.button}>
                        <div>
                          <img src={subject.image}></img>
                          <Typography align="center" variant="subtitle1">
                            {subject.title}
                          </Typography>
                        </div>
                      </Button>
                    </Link>
                  </Paper>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="other" style={{ paddingBottom: "50px" }}>
          <div style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" align="left">
              OTHER
            </Typography>
          </div>
          <Grid alignItems="center" justify="flex-start" spacing={1} container>
            {other.map((subject) => (
              <Grid key={subject.title} item xs={6} sm={3} md={3}>
                <div>
                  <Paper elevation={2} className={classes.paper}>
                    <Link
                      to={`/quizes?subject=${subject.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button className={classes.button}>
                        <div>
                          <img src={subject.image}></img>
                          <Typography align="center" variant="subtitle1">
                            {subject.title}
                          </Typography>
                        </div>
                      </Button>
                    </Link>
                  </Paper>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

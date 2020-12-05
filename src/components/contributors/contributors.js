import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "12vh",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    cursor: "pointer",
  },
  paper: {
    height: 300,
    width: 300,
  },
  name: {
    color: "#ffffff",
  },
  card: {
    width: "200px",
    height: "200px",
  },
}));

const Contributors = () => {
  const classes = useStyles();

  const [contributors, setcontributors] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/IshankaDSenevirathne/Paperly/contributors"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setcontributors([...response, ...response, ...response]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {contributors.map((value) => (
                <Grid key={value.id} item className={classes.card}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Avatar
                      alt={`${value.login}'s avatar`}
                      src={value.avatar_url}
                      className={classes.large}
                      component="a"
                      href={value.html_url}
                      target="_blank"
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <p className={classes.name}>{value.login}</p>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Contributors;

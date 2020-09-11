import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LinkItem from "./LinkItem";

var qs = require("qs");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const paperss = [
  { title: "2019 Advanced Level Physics", year: "2019" },
  { title: "2018 Advanced Level Physics", year: "2018" },
];

export default function QuizesPage(props) {
  const classes = useStyles();
  let query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  let { subject } = query;
  let papers = require("../../paperdata/papers.json");
  let paperList = papers[subject];
  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" className={classes.title}>
            SELECT A PAPER TO CONTINUE
          </Typography>
          <div className={classes.demo}>
            <List>
              {paperList.map((paper) => (
                <LinkItem
                  key={paper.year}
                  title={paper.title}
                  year={paper.year}
                  subject={query.subject}
                />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

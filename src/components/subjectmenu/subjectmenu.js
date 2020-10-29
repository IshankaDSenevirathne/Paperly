import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { makeStyles } from "@material-ui/core/styles";

import Categories from "./Categories/Categories";
import Rocket from "../Animations/Rocket";

import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import SearchIcon from "@material-ui/icons/Search";
let papers = require("../../paperdata/papers.json");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  paperlist: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    marginBottom: "3%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const Subjectmenu = () => {
  const [paperNameList, setpaperNameList] = useState([]);
  const [paperNameListDefault, setpaperNameListDefault] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    Object.keys(papers).forEach((subject) => {
      console.log(subject);

      let paperarr = papers[subject].map((ele) => ({
        ...ele,
        subject: subject,
      }));
      console.log(paperarr);
      setpaperNameList((pre) => [...pre, ...paperarr]);
      setpaperNameListDefault((pre) => [...pre, ...paperarr]);
    });
  }, []);

  const search = (val) => {
    console.log(val);

    let matcher = [];

    paperNameListDefault.forEach((ele) => {
      console.log(ele.name);
      let m = String(ele.name).match(new RegExp(val, "gi"));

      if (m) {
        matcher.push(ele);
      }
    });
    setpaperNameList(matcher);
  };

  return (
    <div style={{ color: "white" }}>
      <Navbar />
      <div style={{ marginTop: "120px", marginBottom: "120px" }}>
          <Categories />
      </div>
      <div className={classes.paperlist}>
        {" "}
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Subjectmenu;

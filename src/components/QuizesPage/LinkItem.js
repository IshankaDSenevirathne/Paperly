import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import paperIcon from "../../img/icons/paper.png";

export default function LinkItem({ title, year, subject }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={paperIcon} alt="paper" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <Link to={`/quiz?subject=${subject}&year=${year}`}>
        <IconButton edge="end" aria-label="Open Paper">
          <ArrowForwardIos />
        </IconButton>
      </Link>
    </ListItem>
  );
}

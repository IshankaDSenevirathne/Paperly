import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import paperIcon from "../../img/icons/paper.png";

import "./linkitem.css";

export default function LinkItem({ title, year, subject }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={paperIcon} alt="paper" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link
            className="link_item"
            to={`/quiz?subject=${subject}&year=${year}`}
          >
            {title}
          </Link>
        }
      />
    </ListItem>
  );
}

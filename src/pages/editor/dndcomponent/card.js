import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import marked from "marked";
import { useDrag, useDrop } from "react-dnd";
const API = `https://paperly-114b9e.us1.kinto.io`;

// import { ItemTypes } from "./ItemTypes";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  //   backgroundColor: "white",
  cursor: "move",
};

const useStyles = makeStyles(() => ({
  feedback: {
    color: "white",
  },
  closebtndiv: {
    textAlign: "right",
  },
}));

export const Card = ({ id, text, index, moveCard, cardupdate, cardremove }) => {
  const classes = useStyles();
  const [type, settype] = useState("text");

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const cardUpdateImg = (index, id, value) => {
    let url = `${API}/mathjax/getmathimage?env=${
      process.env.NODE_ENV
    }&equation=${encodeURIComponent(value)}`;

    let componentText = `<img src='${url}'/>`;
    console.log(componentText);
    cardupdate(index, id, componentText);
  };

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      <div className={classes.closebtndiv}>
        <button
          onClick={(e) => {
            cardremove(index);
          }}
        >
          x
        </button>
      </div>

      <select
        onChange={(e) => {
          console.log(e.target.value);
          settype(e.target.value);
        }}
      >
        <option value="text">text</option>
        <option value="img">image</option>
      </select>

      <div style={{ color: "white" }}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        />
      </div>

      <TextField
        placeholder="Tell us what you think... "
        variant="filled"
        fullWidth={true}
        inputProps={{ className: classes.feedback }}
        multiline
        rows={6}
        rowsMax={6}
        defaultValue={text}
        id="feedback"
        onChange={(e) => {
          if (type === "text") {
            cardupdate(index, id, e.target.value);
          } else {
            cardUpdateImg(index, id, e.target.value);
          }
        }}
        data-cy="feedback-feild"
      />
    </div>
  );
};

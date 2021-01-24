import React, { useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "./card";
import update from "immutability-helper";
import { removeItem } from "../../../lib/dndcardremove";

const style = {
  width: 400,
};

const useStyles = makeStyles(() => ({
  contentwidth: { width: "50%" },
}));
const Cardcontainer = ({ getDataFromDnD }) => {
  const classes = useStyles();

  const [cards, setCards] = useState([
    {
      id: 4,
      text: "Write a cool JS library",
    },
  ]);

  const addCard = () => {
    let temp = [
      ...cards,
      {
        id: Math.floor((Math.random() * 10000) % 100),
        text: "PROFIT",
      },
    ];
    setCards(temp);
    getDataFromDnD(temp);
  };

  const cardupdate = (index, id, text) => {
    console.log("card update");
    console.log(id, text);
    let temp = [...cards];
    temp[index] = { id, text };
    getDataFromDnD(temp);
    setCards(temp);
  };

  const cardremove = useCallback(
    (id) => {
      console.log("card remove");
      console.log(id);
      let shiftedArr = removeItem([...cards], id);
      console.log(shiftedArr);
      setCards(shiftedArr);
      getDataFromDnD(shiftedArr);
    },
    [cards]
  );

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log("card move");
      const dragCard = cards[dragIndex];
      let temp = update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      });
      setCards(temp);
      getDataFromDnD(temp);
    },
    [cards]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
        cardupdate={cardupdate}
        cardremove={cardremove}
      />
    );
  };
  return (
    <>
      <Grid container justify="center">
        <Grid container justify="center">
          <Grid container justify="center">
            {" "}
            <button
              onClick={(e) => {
                addCard();
              }}
            >
              add
            </button>
          </Grid>
        </Grid>

        <div className={classes.contentwidth}>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </Grid>
    </>
  );
};
export default Cardcontainer;

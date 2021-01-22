import React, { useState, useCallback } from "react";
import { Card } from "./card";
import update from "immutability-helper";
const style = {
  width: 400,
};
const Cardcontainer = ({ getDataFromDnD }) => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
    ]);

    const addCard = () => {
      let temp = [
        ...cards,
        {
          id: cards.length + 1,
          text: "PROFIT",
        },
      ];
      setCards(temp);
      getDataFromDnD(temp);
    };

    const cardupdate = (id, text) => {
      console.log(id, text);
      let temp = [...cards];
      temp[id - 1] = { id, text };
      getDataFromDnD(temp);
      setCards(temp);
    };

    // const carddelete = ()

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
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
          //   cardupdate={cardupdate}
        />
      );
    };
    return (
      <>
        {" "}
        <button
          onClick={(e) => {
            addCard();
          }}
        >
          add
        </button>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
export default Cardcontainer;

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
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text:
          "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);

    const addCard = () => {
      setCards((pre) => {
        return [
          ...pre,
          {
            id: pre.length + 1,
            text: "PROFIT",
          },
        ];
      });
    };

    const cardupdate = (id, text) => {
      console.log(id, text);
      //   getDataFromDnD()
      setCards((pre) => {
        pre[id - 1] = { id, text };
        return pre;
      });
      getDataFromDnD(cards);
      // setcardData(update(cardData, {$}));
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
          cardupdate={cardupdate}
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

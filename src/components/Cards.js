import React, { useState } from 'react';
import useShuffle from './useShuffle';
import servants from '../json/servants.json';

const Cards = ({updateScore,chosenCards, setChosenCards, setIsGameOver}) => {
  const cardSet = useShuffle(servants)
  const [cards] = useState(cardSet);

  const handleClick = (selected) => {
    let cardSelected = false;
    chosenCards.forEach(card => {
        if (card === selected.name) {
            cardSelected = true;
        }
    })
    if (!cardSelected) {
        updateScore();
        setChosenCards(chosenCards.concat(selected.name));
    }  else {
        setIsGameOver(true);
    }
}

  return (
    <div className="card-container">
      {cards.map(card => {
        return (
          <img src={card.img} alt="servant card" key={card.id} className="servant-card" onClick={() => handleClick(card)}/>
        );
      })}
    </div>
  );
};

export default Cards;

import React, { useState } from 'react';
import shuffle from './shuffle';
import servants from '../json/servants.json';

const Cards = ({score, setScore, chosenCards, setChosenCards, setIsGameOver}) => {
  const [cards, setCards] = useState(shuffle(servants));

  const handleClick = (selected) => {
    let cardSelected = false;
    chosenCards.forEach(card => {
        if (card === selected.name) {
            cardSelected = true;
        }
    })
    if (!cardSelected) {
        setScore(score + 1);
        setChosenCards(chosenCards.concat(selected.name));
    }  else {
        setScore(0);

    }
    setCards(shuffle(servants));


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

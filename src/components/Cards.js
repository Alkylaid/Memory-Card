import React, { useState } from 'react';
import shuffle from './shuffle';
import servants from '../json/servants.json';

const Cards = ({score, setScore, prevCard, setPrevCard, setIsGameOver}) => {
  const [cards, setCards] = useState(shuffle(servants));

  const handleClick = (card) => {
    if (prevCard === null) {
        setPrevCard(card.name);
    } else if (prevCard === card.name) {
        setScore(score + 1);
        setPrevCard(card.name);
    } else if (prevCard !== card.name){
        setIsGameOver(true);
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

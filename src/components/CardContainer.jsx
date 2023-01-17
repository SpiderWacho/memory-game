import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./CardContainer.css";
import LevelChange from "./LevelChange";
import GameOver from "./GameOver";

import spidey from "../img/spidey.jpg";
import hulk from "../img/hulk.png";
import gambit from "../img/gambit.png";
import deadpool from "../img/deadpool.png";
import daredevil from "../img/daredevil.png";
import drStrange from "../img/doctorStrange.png";
import humanTorch from "../img/humanTorch.png";
import ironMan from "../img/ironman.jpg";
import namor from "../img/namor.png";
import nightCrawler from "../img/nightCrawler.jpg";
import thor from "../img/thor.png";

const heroes = [
  {
    id: 1,
    img: spidey,
    name: "Spiderman"
  },
  {
    id: 2,
    img: hulk,
    name: "Hulk"
  },
  {
    id: 3,
    img: gambit,
    name: "Gambit"
  },
  {
    id: 4,
    img: deadpool,
    name: "Deadpool"
  },
  {
    id: 5,
    img: daredevil,
    name: "Daredevil"
  },
  {
    id: 6,
    img: drStrange,
    name: "Dr Strange"
  },
  {
    id: 7,
    img: humanTorch,
    name: "Human Torch"
  },
  {
    id: 8,
    img: ironMan,
    name: "Iron Man"
  },
  {
    id: 9,
    img: namor,
    name: "Namor"
  },
  {
    id: 10,
    img: nightCrawler,
    name: "Night Crawler"
  },
  {
    id: 11,
    img: thor,
    name: "Thor"
  }
];

function CardContainer({ setScore, level }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [cardVisible, setCardVisible] = useState(false);
  const [changeLevel, setChangeLevel] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const getRandomHero = () => {
    const newMin = Math.ceil(0);
    const newMax = Math.floor(heroes.length);
    return heroes[Math.floor(Math.random() * (newMax - newMin) + newMin)];
  };

  const fillCards = (array, cardsToDraw) => {
    const cardArray = [...array];
    while (cardArray.length < cardsToDraw) {
      const hero = getRandomHero();
      if (!cardArray.some(card => hero.id === card.id)) {
        cardArray.push(hero);
      }
    }
    const shuffledArray = cardArray.sort(() => 0.5 - Math.random());
    setCardsToShow(shuffledArray);
  };

  useEffect(() => {
    let quantity = 5;
    if (level === 1) {
      quantity = 7;
    } else if (level === 2) {
      quantity = 10;
    } else if (level === 3) {
      setGameOver(true);
    }

    fillCards(selectedCards, quantity);
  }, [selectedCards, level]);

  const renderLevelChange = () => {
    setChangeLevel(true);
    setTimeout(() => {
      setChangeLevel(false);
    }, 1700);
  };

  useEffect(() => {
    if (level === 1 || level === 2) {
      setSelectedCards([]);
      renderLevelChange();
    }
  }, [level]);

  if (cardVisible === false) {
    setTimeout(() => {
      setCardVisible(true);
    }, 750);
  }

  const markSelected = hero => {
    if (!selectedCards.some(card => card.id === hero.id)) {
      setSelectedCards(prevstate => [...prevstate, hero]);
      setCardVisible(false);
      setScore(prevscore => prevscore + 1);
    } else {
      setCardVisible(false);
      setSelectedCards([]);
      setScore(0);
    }
  };

  const restartGame = () => {
    setCardVisible(false);
    setSelectedCards([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <>
      <div className="cardContainer">
        {cardsToShow.map(card => (
          <Card
            hero={card}
            markSelected={markSelected}
            cardVisible={cardVisible}
            key={card.id}
          />
        ))}
      </div>
      {changeLevel && <LevelChange level={level} />}
      {gameOver && <GameOver restartGame={restartGame} />}
    </>
  );
}

CardContainer.propTypes = {
  setScore: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired
};

export default CardContainer;

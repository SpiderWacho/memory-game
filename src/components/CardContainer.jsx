import React, { useState, useMemo, useEffect } from "react";
import Card from "./Card";
import "./CardContainer.css";

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
  const [quantity, setQuantity] = useState(5);
  const [selectedCards, setSelectedCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    fillCards([]);
  }, []);

  useEffect(() => {
    fillCards(selectedCards);
  }, [selectedCards]);

  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  useEffect(() => {
    console.log(cardsToShow);
  }, [cardsToShow]);

  if (cardVisible === false) {
    setTimeout(() => {
      setCardVisible(true);
    }, 750);
  }

  const checkLevel = () => {
    if (level === 0) {
      setQuantity(5);
    } else if (level === 1) {
      setQuantity(7);
    } else if (level === 2) {
      setQuantity(10);
    }
  };

  const getRandomHero = () => {
    const newMin = Math.ceil(0);
    const newMax = Math.floor(heroes.length);
    return heroes[Math.floor(Math.random() * (newMax - newMin) + newMin)];
  };

  const fillCards = array => {
    checkLevel();
    const cardArray = [...array];
    while (cardArray.length < quantity) {
      const hero = getRandomHero();
      if (!cardArray.some(card => hero.id === card.id)) {
        cardArray.push(hero);
      }
    }
    setCardsToShow(cardArray);
  };

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

  return (
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
  );
}

export default CardContainer;

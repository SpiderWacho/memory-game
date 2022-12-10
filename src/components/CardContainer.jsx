import React, { useState } from "react";
import Card from "./Card";
import "./CardContainer.css";
import spidey from "../img/spidey.jpg";
import hulk from "../img/hulk.png";
import gambit from "../img/gambit.jpg";
import deadpool from "../img/deadpool.jpg";
import daredevil from "../img/daredevil.jpg";

function CardContainer() {
  const [cardVisible, setCardVisible] = useState(false);
  setTimeout(() => {
    setCardVisible(true);
  }, 1000);

  const heroes = [
    {
      img: spidey,
      name: "Spiderman",
    },
    {
      img: hulk,
      name: "Hulk",
    },
    {
      img: gambit,
      name: "Gambit",
    },
    {
      img: deadpool,
      name: "Deadpool",
    },
    {
      img: daredevil,
      name: "Daredevil",
    },
  ];

  function getRandomInt(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin) + newMin);
  }

  const selectRandom = () => {
    const { length } = heroes;
    return getRandomInt(0, length);
  };

  const createNewArray = () => {
    const newArr = [];
    while (newArr.length < heroes.length) {
      const randomNumber = selectRandom();
      if (!newArr.includes(heroes[randomNumber])) {
        newArr.push(heroes[randomNumber]);
      }
    }
    return newArr;
  };

  const randomHeroes = createNewArray();

  return (
    <div className="cardContainer">
      {cardVisible
        ? randomHeroes.map((hero) => {
            return <Card hero={hero} />;
          })
        : randomHeroes.map(() => {
            return <div className="backCard" />;
          })}
    </div>
  );
}

export default CardContainer;

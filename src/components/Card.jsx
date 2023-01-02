import React from "react";
import "./Card.css";

function Card({ hero, markSelected, cardVisible }) {
  // console.log(hero);
  return (
    <div>
      {cardVisible ? (
        <div
          className="card"
          onClick={() => markSelected(hero)}
          role="option"
          aria-checked="false"
          tabIndex={0}
        >
          <div className="img-container">
            <img className="image" alt="card" src={hero.img} />
          </div>
          <div className="name-container">
            <p>{hero.name}</p>
          </div>
        </div>
      ) : (
        <div className="backCard" />
      )}
    </div>
  );
}

export default Card;

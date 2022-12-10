import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="image" alt="card" src={props.hero.img} />
      </div>
      <div className="name-container">
        <p>{props.hero.name}</p>
      </div>
    </div>
  );
}

export default Card;

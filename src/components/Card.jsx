import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ hero, markSelected, cardVisible }) {
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

Card.propTypes = {
  hero: PropTypes.object.isRequired,
  markSelected: PropTypes.func.isRequired,
  cardVisible: PropTypes.bool.isRequired
};

export default Card;

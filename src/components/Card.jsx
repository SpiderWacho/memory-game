import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ hero, markSelected, cardVisible }) {
  return (
    <div>
      {cardVisible ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          className="card"
          onClick={() => markSelected(hero)}
          // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
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
  // eslint-disable-next-line react/forbid-prop-types
  hero: PropTypes.object.isRequired,
  markSelected: PropTypes.func.isRequired,
  cardVisible: PropTypes.bool.isRequired
};

export default Card;

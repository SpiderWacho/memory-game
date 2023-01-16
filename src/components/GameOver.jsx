import React from "react";
import "./GameOver.css";
import PropTypes from "prop-types";

function GameOver({ restartGame }) {
  return (
    <div className="win-screen">
      <h1 className="win-text">You Win!</h1>
      <span className="replay-btn-container">
        <button
          className="replay-btn"
          type="button"
          onClick={() => restartGame()}
        >
          Replay?
        </button>
      </span>
    </div>
  );
}

export default GameOver;

GameOver.propTypes = {
  restartGame: PropTypes.func.isRequired
};

import React, { useEffect } from "react";
import "./Score.css";
import PropTypes from "prop-types";

function Score({ score, maxScore, updateMax }) {
  useEffect(() => {
    updateMax();
  }, [score, maxScore]);
  return (
    <div className="scoreContainer">
      <p className="currentScore">Current Score: {score}</p>
      <p className="maxScore">Max Score: {maxScore}</p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number.isRequired,
  updateMax: PropTypes.func.isRequired
};

export default Score;

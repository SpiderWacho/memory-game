import React, { useEffect } from "react";
import "./Score.css";

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

export default Score;

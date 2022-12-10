import React from "react";
import "./Score.css";

function Score() {
  return (
    <div className="scoreContainer">
      <p className="currentScore">Current Score: {}</p>
      <p className="maxScore">Max Score: {}</p>
    </div>
  );
}

export default Score;

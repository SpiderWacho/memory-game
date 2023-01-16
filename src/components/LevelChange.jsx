import React from "react";
import "./LevelChange.css";
import PropTypes from "prop-types";

function LevelChange({ level }) {
  return (
    <div className="level-change">
      <h1 className="modal-text">Good Job!</h1>
      <h1 className="modal-text">Now playing level {level}</h1>
    </div>
  );
}

export default LevelChange;

LevelChange.propTypes = {
  level: PropTypes.number.isRequired
};

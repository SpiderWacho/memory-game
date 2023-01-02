import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (score === 5) {
      setLevel(1);
    }

    if (score === 12) {
      setLevel(2);
    }

    if (score === 20) {
      setLevel(3);
    }
  }, [score]);

  const updateMax = () => {
    if (maxScore < score) {
      setMaxScore(score);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Memory Game</h1>
        <Score score={score} maxScore={maxScore} updateMax={updateMax} />
      </div>
      <div className="content">
        <CardContainer setScore={setScore} level={level} />
      </div>
      <div className="footer" />
    </div>
  );
}

export default App;

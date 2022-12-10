import "./App.css";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Memory Game</h1>
        <Score />
      </div>
      <div className="content">
        <CardContainer />
      </div>
      <div className="footer" />
    </div>
  );
}

export default App;

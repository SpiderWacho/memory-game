import './App.css';
import Card from './components/Card';
import spidey from './img/spidey.jpg'
import hulk from './img/hulk.png';
import gambit from './img/gambit.png';
import deadpool from './img/deadpool.jpg';
import daredevil from './img/daredevil.jpg';

const imgs = [spidey, hulk, gambit, deadpool, daredevil]


function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Memory Game</h1>
      </div>
      <div className='content'>
        <Card imgs={imgs}></Card>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;

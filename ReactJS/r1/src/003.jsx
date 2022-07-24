import './App.css';
import Bebras from './Components/003/Bebras';
import Briedis from './Components/003/Briedis';


const cats = ['Pilkis', 'Mulkis', 'Kriukis'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='red'>Start</h1>
        <Bebras></Bebras>
        <Briedis></Briedis>
        {
          cats.map((c, i) => <span key={i}>{c}</span>)
        }
        
      </header>
    </div>
  );
}

export default App;

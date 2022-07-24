import './App.css';
import Text from './Components/004/Text';
import Forma from './Components/004/Forma';
import Kvadratas from './Components/004/Kvadratas';
import Spalvos from './Components/004/Spalvos';
import Apskritimai from './Components/004/Apskritimai';
import A from './Components/004/A';
import C from './Components/004/C';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className='red'>Props</h1>
                <Text zodis="Geras zuikis" zenklas="!" spalva="green"></Text>
                <Text zodis="Blogas zuikis" zenklas="%" spalva="red"></Text>
                <Text zodis="Kitas zuikis" zenklas="$" spalva="blue"></Text>
                <Forma form="squre"></Forma>
                <Forma form="circle"></Forma>
                <Kvadratas aukstis={400} plotis={30}></Kvadratas>
                <Kvadratas aukstis={400} plotis={800}></Kvadratas>
                <Spalvos tekstas="blue" fonas="green"></Spalvos>
                <Apskritimai number={10}></Apskritimai>
                <div className='container'>
                <A color1="green" color2="blue"></A>
                </div>
                <C count={5}></C>
            </header>
        </div>
    );
}

export default App;

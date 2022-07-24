import { useState } from 'react';
import './App.scss';
import Blue from './Components/007/Blue';
import Brown from './Components/007/Brown';
import Green from './Components/007/Green';
import Red from './Components/007/Red';
import Yellow from './Components/007/Yellow';
import rand from './Functions/rand';
import Visual from './Components/007/Visual';
import B1 from './Components/007/B1';
import B2 from './Components/007/B2';
import B3 from './Components/007/B3';

function App() {

    const [count, setCount] = useState(0);
    const [visual, setVisual] = useState(false);
    const [rColor, setRColor] = useState('white');
    const [racer1, setRacer1] = useState(0);
    const [racer2, setRacer2] = useState(0);
    const [racer1c, setRacer1c] = useState('black');
    const [racer2c, setRacer2c] = useState('black');
    const [forma, setForma] = useState('');
    const [randColor, setRandColor] = useState('white');


    const doSomething = () => {
        const r1 = rand(1, 5);
        const r2 = rand(1, 5);

        if (racer1 + r1 > racer2 + r2) {
            setRacer1c('crimson');
            setRacer2c('gray');
        }
        else if (racer1 + r1 < racer2 + r2) {
            setRacer2c('crimson');
            setRacer1c('gray');
        }
        else {
            setRacer2c('black');
            setRacer1c('black');
        }
        setRacer1(s => s + r1);
        setRacer2(s => s + r2);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
                <Red setVisual={setVisual} rColor={rColor} racer1={racer1} racer1c={racer1c}> </Red>
                <Brown visual={visual} setRColor={setRColor} racer2={racer2} racer2c={racer2c}></Brown>
                <Yellow doSomething={doSomething}></Yellow>
                <Visual forma={forma} randColor={randColor} ></Visual>
                <div className='container'>
                    <B1 setForma={setForma}></B1>
                    <B2 setForma={setForma}></B2>
                    <B3 setRandColor={setRandColor}></B3>
                </div>
            </header>
        </div>
    );
}

export default App;
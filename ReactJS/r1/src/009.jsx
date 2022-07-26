import './App.scss';
import { useEffect, useState } from 'react';
import Kv from './Components/009/Kv';
import randColor from './Functions/randColor';
import Word from './Components/009/Word';
import Table from './Components/009/Table';

const magicNumbers = [

    { left: 5, right: 11 },

    { left: 45, right: 0 },

    { left: 4, right: 22 },

    { left: 13, right: 13 }

];

function App() {

    const [kv, setKv] = useState([]);
    const [sk, setSk] = useState(0);


    const add = () => {

        setKv(k => [...k, randColor()]);

    }

    useEffect(() => {
        if (kv.length > 10) setKv([])
    }, [kv]);

    useEffect(() => {
        if (kv.length === 4 && kv[3] !== 'black') {
            setKv(kv.map((c, i) => i === 3 ? 'black' : c))
        }
    }, [kv]);


    useEffect(() => {
        if (sk > 10) setSk(0)
    }, [sk]);



    return (
        <div className="App">
            <header className="App-header">
                <h1>useEffect</h1>
                <div className='container'>
                    {
                        kv.map((k, i) => <Kv key={i} k={k} i={i}></Kv>)
                    }
                </div>
                <Word color='orange' ></Word>
                <h2>{sk}</h2>
                <div className='container'>
                    <button onClick={add}>Add []</button>
                    <button onClick={() => setSk(s => s + 1)}>+1</button>
                </div>
                <Table data={magicNumbers}></Table>
            </header>
        </div>
    );
}

export default App;
import { useState } from 'react';
import { useReducer } from 'react';
import './App.scss';
import count from './Reducers/count';
import square from './Reducers/square';
function App() {

    const [number, dispachNumber] = useReducer(count, 0);
    const [numberVal, setNumberVal] = useState('');
    const [sq, dispachSq] = useReducer(square, []);
    const [sqVal, setSqVal] = useState('');

    const add1 = () => {
        const action = {
            type: 'plus_one'
        }
        dispachNumber(action);
    }

    const rem1 = () => {
        const action = {
            type: 'minus_one'
        }
        dispachNumber(action);
    }

    const do0 = () => {
        const action = {
            type: 'reset'
        }
        dispachNumber(action);
    }

    const addSome = () => {
        const action = {
            type: 'add_some',
            payload: numberVal
        }
        dispachNumber(action);
    }

    const remSome = () => {
        const action = {
            type: 'rem_some',
            payload: numberVal
        }
        dispachNumber(action);
    }

    const addSq = () => {
        const action = {
            type: 'add',
            payload: sqVal
        }
        setSqVal('');
        dispachSq(action);
    }

    const remSq = () => {
        const action = {
            type: 'rem'
        }
        dispachSq(action);
    }

    const doEmpty = () => {
        const action = {
            type: 'clear'
        }
        dispachSq(action);
    }

    const sortUp = () => {
        const action = {
            type: 'up'
        }
        dispachSq(action);
    }

    const sortDown = () => {
        const action = {
            type: 'down'
        }
        dispachSq(action);
    }

    const f1 = () => {
        const action = {
            type: 'f1'
        }
        dispachSq(action);
    }

    const f2 = () => {
        const action = {
            type: 'f2'
        }
        dispachSq(action);
    }

    const fAll = () => {
        const action = {
            type: 'f_all'
        }
        dispachSq(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>useReducer</h1>
                <h2>Number now is: {number}</h2>
                <div className="container">
                    <button onClick={add1}>+1</button>
                    <button onClick={rem1}>-1</button>
                    <button onClick={do0}>0</button>
                    <input className="cinput" type="text" value={numberVal} onChange={e => setNumberVal(e.target.value.length <= 2 ? e.target.value : numberVal)} />
                    <button onClick={addSome}>+?</button>
                    <button onClick={remSome}>-?</button>
                </div>
                <div className="container">
                    {
                        sq.map((s, i) => s.show ? <div key={i} className="sc">{s.number}</div> : null)
                    }
                </div>
                <div className="container">
                    <button onClick={addSq}>+[]</button>
                    <input className="cinput" type="text" value={sqVal} onChange={e => setSqVal(e.target.value.length <= 2 ? e.target.value : sqVal)} />
                    <button onClick={remSq}>-[]</button>
                    <button onClick={doEmpty}>[]</button>
                    <button onClick={sortUp}>UP</button>
                    <button onClick={sortDown}>DOWN</button>
                    <button onClick={f1}>*</button>
                    <button onClick={f2}>**</button>
                    <button onClick={fAll}>ALL</button>
                </div>
            </header>
        </div>
    );
}
export default App;
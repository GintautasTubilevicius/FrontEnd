import './App.scss';
import Sq1 from './Components/015/Sq1';
import { useRef, useState } from "react";
import LocalStorage from './Components/015/LocalStorage';



function App() {

    const [counter, setCounter] = useState([0, 0]);

    const idSq = useRef(1);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Total Recall ---- Apskritimai {counter[0]} Kvadratai {counter[1]}</h1>
                <Sq1 setCounter={setCounter} idSq={idSq}></Sq1>
                <LocalStorage></LocalStorage>
            </header>
        </div>
    );
}
export default App;
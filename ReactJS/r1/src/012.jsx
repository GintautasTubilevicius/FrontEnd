import { useState } from 'react';
import './App.scss';
import BlueRed from './Components/012/BlueRed';
// import Check from './Components/012/Check';
import Green from './Components/012/Green';
import Radio from './Components/012/Radio';
import Range from './Components/012/Range';
import Show from './Components/012/Show';
import TextBla2 from './Components/012/TextBla2';


function App() {

    const [word, setWord] = useState('')
    const [text, setText] = useState('');
    const [h1, setH1] = useState('Repeat');

    const doIt = () => {
        setH1(text);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>{h1}</h1>
                <Show word={word} />
                <TextBla2 setWord={setWord} />
                <Green setText={setText} doIt={doIt } text={text}></Green>
                {/* <Check></Check> */}
                <BlueRed></BlueRed>
                <Radio></Radio>
                <Range></Range>
            </header>
        </div>
    );
}
export default App;
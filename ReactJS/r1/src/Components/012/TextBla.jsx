import { useState } from "react";

function TextBla() {

    const [word, setWord] = useState('');
    const [text, setText] = useState('');
    const [color, setColor] = useState('white');
    const [wordColor, setWordColor] = useState('#ffffff');

    const doIt = () => {
        setWord(text);
        setColor(wordColor)
    }

    return (
        <>
            <h3 style={{ color }}>{word}</h3>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <input type="color" value={wordColor} onChange={e => setWordColor(e.target.value)}></input>
            <button onClick={doIt}>Atvaizduoti žodį</button>
        </>
    );
}

export default TextBla;
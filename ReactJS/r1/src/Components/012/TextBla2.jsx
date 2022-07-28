
import { useState } from "react";

function TextBla2({setWord}) {

    const [text, setText] = useState('');


    const doIt = () => {
        setWord(text);
    }


    return (
        <div className="text-bin">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={doIt}>Do</button>
        </div>
    )
}

export default TextBla2;
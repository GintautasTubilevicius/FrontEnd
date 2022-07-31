
import { useState } from "react";

function Range() {

    const [w, setW] = useState('300');
    const [h, setH] = useState('300');
    const [cb, setCb] = useState(true);
    const [cb2, setCb2] = useState(true);
    const [color, setColor] = useState('');
    const [colorInput, setColorInput] = useState('');

    const doColor = () => {
        setColor('');
        setCb2(b => !b);
    }

    return (

        <div className="big-bin">
            <div className="container">
                <div> <label htmlFor="forma">Forma </label><input type="checkbox" id="forma" checked={cb} onChange={() => setCb(b => !b)}></input></div>
                <div> <label htmlFor="spalva">Spalva </label> <input type="checkbox" id="spalva" checked={cb2} onChange={doColor}></input></div>
                <div> <input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)}></input></div>
                <div><button onClick={() => setColor(colorInput)}>Pasirinkta spalva</button></div>
            </div>
            <div className="big-bin__top">
                <div className="big-bin__top__left">
                    <input type="range" min="0" max="800" value={h} onChange={e => setH(e.target.value)} step="10" />
                </div>
                <div className="big-bin__top__right">
                    <div className="nice" style={{
                        width: w + 'px',
                        height: h + 'px',
                        borderRadius: cb ? null : '0%',
                        backgroundColor: color !== '' ? color : cb2 ? 'blue' : 'red'
                    }}></div>
                </div>
            </div>
            <div className="big-bin__bottom">
                <span>{h.padStart(3, '0')} px</span>
                <input type="range" min="0" max="800" value={w} onChange={e => setW(e.target.value)} step="10" />
                <span>{w.padStart(3, '0')} px</span>
            </div>
        </div>
    );


}

export default Range;
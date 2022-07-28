import { useState } from "react";



const selectData = [
    { value: 1, word: 'One' },
    { value: 2, word: 'Two' },
    { value: 5, word: 'Five' },
    { value: 1000000, word: 'Milion' }
];

function Select() {

    const [select, setSelect] = useState(5);
    const [color, setColor] = useState(null);
    const [colorInput, setColorInput] = useState('#ffffff');
    const [count, setCount] = useState(0);



    const selectHandler = e => {
        setCount(c => c + 1);
        setSelect(e.target.value);
    };


    return (
        <>
            <fieldset>
                <legend style={{ color }}>Selected: <b>{select} {selectData.find(s => select == s.value).word}</b></legend>
                <select value={select} onChange={selectHandler}>
                    {
                        selectData.map(e => <option key={e.value} value={e.value}>{e.word} </option>)
                    }
                </select>
                <div>
                    <input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)}></input>
                </div>
                <button onClick={() => setColor(colorInput)}>Spalva</button>
            </fieldset>
            <h4>Pasikeite {count} kartu</h4>
        </>
    );
}

export default Select;
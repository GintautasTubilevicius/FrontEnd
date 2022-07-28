import { useState } from "react";

function List() {

    const [zveris, setZveris] = useState('')
    const [amzius, setAmzius] = useState('');
    const [list, setList] = useState([]);

    const addList = () => {
        console.log(zveris, amzius)
        setList(s => [...s, { zveris, amzius }])
        console.log(list)

    }
    const addZveris = e => {
        setZveris(e.target.value)
    }

    const addAmzius = e => {
        setAmzius(e.target.value)
    }

    return (
        <>
            <fieldset>
                <legend>Įveskite žvėrį ir amžių</legend>
                <input type="text" value={zveris} onChange={addZveris}></input>
                <div>
                    <input type="text" value={amzius} onChange={addAmzius}></input>
                </div>
            </fieldset>
            <button onClick={addList}>Įdėti į sąrašą</button>
            <fieldset>
                <legend>Žvėrių sąrašas</legend>
                <ol>
                    {
                        list.map((l, i) => <li key={i}>{l.zveris}   {l.amzius}</li>)
                    }
                </ol>
            </fieldset>
        </>
    );
}

export default List;
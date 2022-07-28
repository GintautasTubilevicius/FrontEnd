import { useState } from "react";

function Bla() {

    const [zodis, setZodis] = useState('');
    const [ideti, setIdeti] = useState('');


    // const addZodis = e => {
    //     setZodis(e.target.value)
    // }

    return (
        <>
            <h3>{ideti}</h3>
            <fieldset>
                <legend>Įveskite žodį</legend>
                <input type="text" value={zodis} onChange={e => setZodis(e.target.value)}></input>
                <button onClick={() => setIdeti(zodis)}>Atvaizduoti žodį</button>
            </fieldset>
        </>
    );
}

export default Bla;
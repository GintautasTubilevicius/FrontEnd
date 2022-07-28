import { useState } from 'react';

function BlueRed() {

    const [cb, setCb] = useState(true);
    const [cb2, setCb2] = useState(true);

     
    return (
        <fieldset>
            <legend>Pamokos paspausk</legend>
            <div>Spalva <input type="checkbox" checked={cb} onChange={() => setCb(b => !b)}></input></div>
            <div>Forma <input type="checkbox" checked={cb2} onChange={() => setCb2(b => !b)}></input></div>
            <div className='circle' style={{backgroundColor: cb ? 'blue' : 'red', borderRadius: cb2 ? null : '0%'}}></div>
        </fieldset>
    )
}

export default BlueRed;
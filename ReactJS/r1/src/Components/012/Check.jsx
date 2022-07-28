import { useState } from 'react';

function Check() {

    const [cb, setCb] = useState({ A: false});
    const [color, setColor] = useState('blue');

    const doChange = e => {
        setCb(c => ({[e.target.value]: !c[e.target.value] }))
        setColor( cb.A === false ? 'blue' : 'red')
    }

     
    return (
        <fieldset>
            <legend>Paspausk</legend>
            <div><input type="checkbox" value="A" checked={cb.A} onChange={doChange}></input></div>
            <div className='circle' style={{backgroundColor: color}}></div>
        </fieldset>
    )
}

export default Check;

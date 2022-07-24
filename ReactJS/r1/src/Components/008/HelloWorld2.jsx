import randColor from '../../Functions/randColor';
import { useState } from 'react';


function HelloWorld2() {

    

    const HW = 'Hello World';
    const HWA = [...Array(HW.length)].map((_,i) => ({l:HW[i], c: randColor()}));

    const [hw, setHw] = useState(HWA);
    const doColor = () => {
        setHw([...Array(HW.length)].map((_,i) => ({l: HW[i], c: randColor()})));
    }
    return (
        <h2 onClick={doColor}>
            {
                hw.map( (l, i) => <span key={i} style={{color: l.c}}>{l.l}</span>)
            }
        </h2>
    )
}
export default HelloWorld2;
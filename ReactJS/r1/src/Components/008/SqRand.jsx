import randColor from '../../Functions/randColor';
import { useState } from 'react';
import rand from '../../Functions/rand';

function SqRand() {

    const [sq, setSq] = useState([]);

    const makeIt = () => {
        // setSq([...Array(rand(5, 25))].map(_ => randColor()))
        setSq([]);
        const count = rand(15, 25);
        let go = 0;
        const timerId = setInterval(() => {
            setSq(s => [...s, randColor()].sort((a, b) => rand(0, 1) ? 1 : -1));
            go++;
            if (count === go) {
                clearInterval(timerId);
            }
        }, 200);
    }

    return (
        <>
            <h1>Kvadratu grupe</h1>
            <button className="blue" onClick={makeIt}>RandKvad</button>
            <div className="container">
                {
                    sq.map((c, i) => <div className='nice-square' key={i} style={{ backgroundColor: c + '70',
                    borderColor: c, }}>{i + 1}</div>)
                }
            </div>

        </>
    )
}
export default SqRand;
import { useState } from 'react';

function Colors() {

    const [sq, setSq] = useState([]);


    return (
        <>
            <div className="container">
                {
                    sq.map((sq, i) => <div className='sc' key={i} style={{ backgroundColor: sq.color }}></div>)
                }
            </div>
            <button className='red' onClick={() => setSq(s => [...s, { color: 'red' }])}>Add Red</button>
            <button className='blue' onClick={() => setSq(s => [...s, { color: 'blue' }])}>Add Blue</button>
            <button onClick={() => setSq([])}>Reset</button>
        </>
    )
}

export default Colors;
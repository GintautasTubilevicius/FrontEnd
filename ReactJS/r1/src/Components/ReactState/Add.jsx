import { useState } from 'react';

function Add() {

    const [sq, setSq] = useState([]);


    return (
        <>
            <div className="container">
                {
                    sq.map((_, i) => <div className='sc' key={i} style={{backgroundColor: 'blue'}}></div>)
                }
            </div>
            <button onClick={() => setSq(s => [...s, 1])}>Add</button>
        </>
    )
}

export default Add;
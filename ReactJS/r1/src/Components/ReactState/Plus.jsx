import { useState } from 'react';

function Plus() {

    const [sk, setSk] = useState(0);

    return (
        <>
            
            <div className="container">
            <button onClick={() => setSk(s => s + 1)}>+</button>
            <h3>{sk}</h3>
            <button onClick={() => setSk(s => s - 3)}>-</button>
            </div>
        </>
    )
}

export default Plus;
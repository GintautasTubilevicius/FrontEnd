import { useState } from 'react';
import rand from '../../Functions/rand'

function Change() {

    const [forma, setForma] = useState('50%');
    const [sk, setSk] = useState();

    return (
        <>
            <div className="circle" style={{borderRadius: forma}}>{sk}</div>
            <button onClick={() => setForma(s => s === '50%' ? '0%' : '50%')}>Change</button>
            <button onClick={() => setSk(rand(5, 25))}>Random</button>
        </>
    )
}

export default Change;
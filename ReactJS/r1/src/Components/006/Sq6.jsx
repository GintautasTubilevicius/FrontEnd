import { useState } from 'react';

function Sq6() {

    const [sk, setSk] = useState(0);

    return (
        <div className="square" onClick={() => setSk(s => s + 1)} style={{ borderRadius: sk > 5 ? '50%' : null }}>{sk}</div>
    );
}

export default Sq6;
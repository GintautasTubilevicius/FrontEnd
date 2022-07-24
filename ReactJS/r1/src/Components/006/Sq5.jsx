import { useState } from 'react';

function Sq5() {

    const [visual, setVisual] = useState(false);

    return (
        <div className="square" style={{
            borderRadius: visual ? '50%' : null
        }} onClick={() => setVisual(s => !s)}></div>
    );
}

export default Sq5;
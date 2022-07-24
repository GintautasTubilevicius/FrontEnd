import { useState } from 'react';

function SC() {

    const [visual, setVisual] = useState(false);

    return (
        <>
            <div className='container'>
                <div className="sc" style={{
                    borderRadius: visual ? '50%' : null
                }} onClick={() => setVisual(s => !s)}></div>
                <div className="circle" style={{
                    borderRadius: visual ? '0%' : null
                }} onClick={() => setVisual(s => !s)}></div>
            </div>
        </>
    )
}
export default SC;
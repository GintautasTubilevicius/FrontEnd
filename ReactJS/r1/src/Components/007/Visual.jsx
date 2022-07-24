import {useState} from 'react'

function Visual({ forma, randColor}) {

    const [border, setBorder] = useState(true);
    return (
        <>

            <div className="sc" style={{ borderRadius: forma, backgroundColor: randColor, borderWidth: border ? 0 : 5}}></div>
            <button onClick={() => setBorder(s => !s)}>Border</button>
        </>
    )
}
export default Visual;
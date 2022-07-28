import { useState } from "react";

function Radio() {

    const [radio, setRadio] = useState('A')

    const doRadio = e => {
        setRadio(e.target.value)
    }

    return (

        <div className="animals-list">

            <div className="input">A <input type="radio" value="A" name="r" onChange={doRadio} checked={'A' === radio}></input></div>
            <div className="input">B <input type="radio" value="B" name="r" onChange={doRadio} checked={'B' === radio}></input></div>
            <div className="input">C <input type="radio" value="C" name="r" onChange={doRadio} checked={'C' === radio}></input></div>
            <div className="input">D <input type="radio" value="D" name="r" onChange={doRadio} checked={'D' === radio}></input></div>

        </div>
    );
}

export default Radio;
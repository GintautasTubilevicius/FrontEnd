import { useState } from 'react';

function CheckBox2() {

    const [cb, setCb] = useState(new Set(['A', 'D']));

    const doChange = e => {
        const cbCopy = new Set(cb);
        setCb(s => {
            s.has(e.target.value) ? cbCopy.delete(e.target.value) : cbCopy.add(e.target.value)
            return cbCopy;
        });
    }

    return (
        <fieldset className='check-box-2'>
            <legend>CheckBox 2: {[...cb].sort().map(c => <span key={c}>{c}</span>)}</legend>
            <div>
                <input id="_A" type="checkbox" value="A" checked={cb.has('A')} onChange={doChange}></input>
                <label htmlFor="_A">A </label>
            </div>
            <div>
                <input id="_B" type="checkbox" value="B" checked={cb.has('B')} onChange={doChange}></input>
                <label htmlFor="_B">B </label>
            </div>
            <div>
                <input id="_C" type="checkbox" value="C" checked={cb.has('C')} onChange={doChange}></input>
                <label htmlFor="_C">C </label>
            </div>
            <div>
                <input id="_D" type="checkbox" value="D" checked={cb.has('D')} onChange={doChange}></input>
                <label htmlFor="_D">D </label>
            </div>
        </fieldset>
    )
}

export default CheckBox2;
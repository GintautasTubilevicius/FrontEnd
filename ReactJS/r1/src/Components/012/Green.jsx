

import Brown from "./Brown";

function Green({ doIt, text, setText }) {

    return (
        <div className="text-bin">
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <Brown doIt={doIt}></Brown>
        </div>
    )
}

export default Green;
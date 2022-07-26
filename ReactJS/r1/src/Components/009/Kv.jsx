import { useEffect } from "react";


function Kv({k, i}) {

    useEffect(() => {

    }, [i])

    return (
        <div className="sc" style={{backgroundColor: k}}>{i}</div>

    )
}

export default Kv;
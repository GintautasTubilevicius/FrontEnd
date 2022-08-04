
function Green({ forma, setForma }) {

    return (
        <>
            <button onClick={() => setForma(s => [...forma, <div className="sc"></div>])}> Prideti Kv</button>
        </>
    )
}

export default Green;
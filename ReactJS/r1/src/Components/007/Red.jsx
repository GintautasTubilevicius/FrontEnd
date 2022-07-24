
function Red({setVisual, rColor, racer1, racer1c}) {
    return (
        <>
        <h2 style={{color: racer1c}}>{racer1}</h2>
        <div className="sc" style={{backgroundColor: rColor}}></div>
        <button onClick={() => setVisual(s => !s)}>O-[]</button>
        </>
    )
}
export default Red;
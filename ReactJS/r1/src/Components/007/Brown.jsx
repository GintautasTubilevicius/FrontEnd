import randColor from '../../Functions/randColor';
function Brown({visual, setRColor, racer2, racer2c}) {

    return (
        <>
        <h2 style={{color: racer2c}}>{racer2}</h2>
        <div className="sc" style={{borderRadius: visual ? '50%' : null}}></div>
        <button onClick={() => setRColor(randColor())}>R Color</button>
        </>
    )
}

export default Brown;
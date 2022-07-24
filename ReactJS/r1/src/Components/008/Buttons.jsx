function Buttons({setView}) {

    return (
        <>
        <div className="container">
            <button onClick={() => setView(1)}>Spalvoti Kvadratai</button>
            <button onClick={() => setView(2)}>Tarpas tarp raidžių</button>
            <button onClick={() => setView(3)}>Spalvotos raidės</button>
            <button onClick={() => setView(4)}>Kvadrtas ar Apskritimas</button>
        </div>
        </>
    )
}
export default Buttons;
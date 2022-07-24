function Apskritimai({ number }) {
    return (
        <div className="container">
            {
                [...Array(number)].map((_, i) => <div className="circleNumbers" key={i}> {i + 1}</div>)
            }
        </div>
    )
}

export default Apskritimai;
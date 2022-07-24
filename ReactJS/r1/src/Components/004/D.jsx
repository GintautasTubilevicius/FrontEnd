function D({ count }) {
    return (
        <div className="container">
            {
                [...Array(count)].map((_, i) => <div className="circleNumbers" key={i}>{i + 1}</div>)
            }
        </div>
    )
}

export default D;
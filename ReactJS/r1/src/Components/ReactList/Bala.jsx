function Bala({seaPlaners}) {

    return (
        <>
        {
            [...seaPlaners].map((s,i) => <div key={s.id} style={{color: s.color}}>{s.type}, {s.name}, {s.color}</div>)
        }
        </>
    )
}

export default Bala;
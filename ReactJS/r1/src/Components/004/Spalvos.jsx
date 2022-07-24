function Spalvos({ fonas, tekstas }) {
    return (
        <h3 style={{
            backgroundColor: fonas === tekstas ? "gray" : fonas,
            color: fonas === tekstas ? "red" : tekstas
        }}>Spalvos priklausomai nuo fono</h3>
    )
}

export default Spalvos;
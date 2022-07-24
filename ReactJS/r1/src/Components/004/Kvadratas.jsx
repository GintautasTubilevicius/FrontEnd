function Kvadratas({ aukstis, plotis }) {
    return (
        <div className="kvadratas" style={{
            height: Math.min(aukstis, 100) + 'px',
            width: Math.min(plotis, 100) + 'px'
        }}></div>
    )
}

export default Kvadratas;
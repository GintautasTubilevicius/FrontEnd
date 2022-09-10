const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function Array({color}) {

    return (
        <h1 style={{color: color === 1 ? 'blue' : color === 2 ? 'red' : null}}>Zebrai ir Bebrai</h1>
    )
}

export default Array;
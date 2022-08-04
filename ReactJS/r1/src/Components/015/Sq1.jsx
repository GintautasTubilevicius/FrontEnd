import { useEffect, useState } from "react";
import rand from "../../Functions/rand";

function Sq1({ setCounter, idSq }) {

    const [sq, setSq] = useState([]);


    useEffect(() => {
        setCounter(s => [
            sq.filter(s => s.type === 0).length,
            sq.filter(s => s.type === 1).length
        ])
    }, [sq, setCounter])



    const add = () => {
        setSq(s => [...s, { color: 'green', type: rand(0, 1), size: rand(25, 125), id: idSq.current++, row: s.length, show: true }, 
        { color: 'blue', type: rand(0, 1), size: rand(25, 125), id: idSq.current++, row: s.length + 1, show: true }])

    }

    const sort = () => {

        setSq( s => [...s].sort((a,b) => a.size - b.size))
    }

    const sortBack = () => {
        // setSq( s => [...s].sort((a,b) => a.id - b.id))
        setSq( s => [...s].sort((a,b) => a.row - b.row))
    }

    const filterKv = () => {
        setSq( s => s.map( f => ({...f, show: f.type ? true : false})))
    }

    const filterAp = () => {
        setSq( s => s.map( f => ({...f, show: f.type ? false : true})))
    }

    const filterBack = () => {
        setSq( s => s.map( f => ({...f, show: true})))
    }

    const sortForm = () => {
        setSq( s => [...s].sort((a, b) => {
            if (a.type === 1 && b.type === 0) {
                return 1;
            }
            if (a.type === 0 && b.type === 1) {
                return -1;
            }
            return b.size - a.size;
        }))
    }


    return (
        <>
            <div className="container">
                <button onClick={add}> Prideti Kv</button>
                <button onClick={sort}> Sort</button>
                <button onClick={sortBack}> Sort Back</button>
                <button onClick={filterKv}> Kvad</button>
                <button onClick={filterAp}> Apsk Back</button>
                <button onClick={filterBack}> Back visi</button>
                <button onClick={sortForm}> Sort forma</button>

            </div>
            <div className="container">
                {
                    sq.map((s, i) => s.show ? 
                        <div className="sc" style={{
                            backgroundColor: s.color,
                            borderRadius: s.type ? '0%' : '50%',
                            width: s.size,
                            height: s.size
                        }} key={i}> {s.id}</div> : null)
                }
            </div>
        </>
    )
}

export default Sq1;
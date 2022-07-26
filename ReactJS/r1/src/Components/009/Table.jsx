import { useEffect } from "react";
import { useState } from "react";
import rand from "../../Functions/rand";

function Table({ data }) {

    const [numbers, setNumbers] = useState(null);

    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        data.map((e, i) => ({ ...e, row: i }))
        setNumbers(data.map((e, i) => ({ ...e, row: i, show: true })).filter(d => d.left !== d.right));
    }, [data]);

    useEffect(() => {
        if (null === sortOrder) {
            return;
        }
        if ('left' === sortOrder) {
            setNumbers(n => [...n].sort((a, b) => b.left - a.left));
        } else if
            ('right' === sortOrder) {
            setNumbers(n => [...n].sort((a, b) => b.right - a.right))
        } else {
            setNumbers(n => [...n].sort((a, b) => a.row - b.row))
        }


    }, [sortOrder]);

    const add = () => {
        const left = rand(0, 45);
        const right = rand(0, 45);
        if (left !== right) {
            setNumbers(n => [...n, { left, right, row: n.length, show: true }]);
        }
    }

    const doLeft = () => {
        setNumbers(n => [...n].sort((a, b) => b.left - a.left))
    }

    const doRight = () => {
        setNumbers(n => [...n].sort((a, b) => b.right - a.right))
    }

    const doDefault = () => {
        setNumbers(n => [...n].sort((a, b) => a.row - b.row))
    }

    const filter20 = () => {
        setNumbers(n => n.map(nb => ({...nb, show: nb.left > 20 })));
    }

    const filter10 = () => {
        setNumbers(n => n.map(nb => ({...nb, show: nb.left < 10 })));
    }

    const noFilter = () => {
        setNumbers(n => n.map(nb => ({...nb, show: true })));
    }




    return (
        <>
            <table>
                <tbody>
                    {
                        numbers?.map((lr, i) => lr.show ? <tr key={i}><tr key={i}>{lr.left} - {lr.right}</tr></tr> : null)
                    }
                </tbody>
            </table>
            <div className="container">
                <button onClick={add}>add numbers</button>
                <button className="blue" onClick={doLeft}>rusiuoti kaire</button>
                <button className="blue" onClick={doRight}>rusiuoti desine</button>
                <button className="blue" onClick={doDefault}>default</button>
                {/* <button onClick={() => setNumbers(n => [...n].sort((a, b) => b.left - a.left))}>rusiuoti kaire</button>
                <button onClick={() => setNumbers(n => [...n].sort((a, b) => b.right - a.right))}>rusiuoti desine</button> */}
                <button className="red" onClick={() => setSortOrder('left')}>rusiuoti kaire</button>
                <button className="red" onClick={() => setSortOrder('right')}>rusiuoti desine</button>
                <button className="red" onClick={() => setSortOrder('default')}>default</button>
                <button className="green" onClick={filter20}>max20</button>
                <button className="green" onClick={filter10}>min10</button>
                <button className="green" onClick={noFilter}>All</button>

            </div>
        </>
    );
}

export default Table;
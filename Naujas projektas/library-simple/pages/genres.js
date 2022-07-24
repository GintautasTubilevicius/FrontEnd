import { useEffect, useState } from "react";

export default function Books() {
    return (
        <div>
            <Title></Title>
            <Table></Table>
            <Pager></Pager>
            <></>
        </div>
    )
}

const Table = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('/api/genres').then(res => res.json())
                           .then(d => setData(d));
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Žanras</th>
                    <th>Iš viso knygų</th>
                </tr>
            </thead>
            <tbody>
                {data.map(Row)}
            </tbody>
        </table>
        );
}


const Title = () => <h1>Mano žanrai</h1>

const Row = (element, i) => (
    <tr key={i}>
        <td>{element.genre_id} </td>
        <td>{element.name} </td>
        <td>{element.books_count} </td>
    </tr>
)

const Pager = () => {
    const [page, setPage] = useState(1)

    return (
        <div className="pager">
            <button onClick={() => setPage(page-1)}>&lt;</button>
            <span>{page}</span>
            <button onClick={() => setPage(page+1)}>&gt;</button>
        </div>
    )
}

async function getData() {
    const result = await fetch('/api/genres').then(res => res.json());
    return result;
}
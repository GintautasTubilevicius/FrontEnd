import { useEffect, useState } from "react";

export default function Genres() {
    const [page, setPage] = useState(1);
    return (
        <div className="main-div">
            <Title></Title>
            <Table></Table>
        </div>
    )
}

const Table = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getData().then(d => setData(d));
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Žanras</th>
                    <th>Pavadinimas</th>
                </tr>
            </thead>
            <tbody>
                {data.map(Row)}
            </tbody>
        </table>
    );
}

const Title = () => <h1>Knygos pagal žanrus</h1>

const Row = (element, i) => (
    <tr key={i}>
        <td className="center">{element.genre_id}</td>
        <td>{element.name}</td>
        <td>{element.title}</td>
    </tr>
)

// async function getData() {
//     const result = await fetch('/api/books-category').then(res => res.json());
//     return result;
// }

async function getData(page) {
    const result = await fetch(`/api/books-category/:page=${page}`).then(res => res.json());
    console.log(page)
    return result;
    console.log(page)
}

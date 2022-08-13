import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function Users() {

    const [users, setUsers] = useState(null);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data));
    }, []);

    const sort = () => {
        setUsers(s => [...s].sort((a, b) => a.name.localeCompare(b.name)))
    }

    const sortBack = () => {
        setUsers(s => [...s].sort((a, b) => a.id - b.id))
    }

    return (
        <>
            <ul>
                {
                    users ? users.map(u => <li className="users-list" key={u.id}>
                        <b>{u.name} </b>
                        <i> Miestas: {u.address.city} </i>
                        Darboviete: {u.company.name}</li>) : <li className="loader"></li>
                }
            </ul>
            <div className="container">
                <button onClick={sort}>Sort Name</button>
                <button onClick={sortBack}>Sort Back</button>
            </div>
        </>
    )
}

export default Users;
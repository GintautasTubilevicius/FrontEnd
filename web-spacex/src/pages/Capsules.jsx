import { useState, useEffect } from "react";
import { Loading } from "../Components";

export default function Capsules() {

    const [capsules, setCapsules] = useState([]);

 

    useEffect(() => {
        const fetchCapsules = async () => {
            const res = await fetch('https://api.spacexdata.com/v4/capsules');
            const data = await res.json();
            setCapsules(data)
        }
        fetchCapsules();
    }, []);

    

    return (
        <>
            {!capsules ? (<Loading />) : (
                <section className="py-40">
                    <div >
                        <article>
                            <h1 className="heading text-center pb-16 ">Capsules (overall {capsules.length})</h1>
                            <div className="max-width grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
                                {
                                    capsules.map(({ id, type, serial, status, last_update }) =>
                                    (
                                        <article className="articles" key={id}>
                                            <h2 className="text-center">{type}</h2>
                                            <ul >
                                                <li className="mb-1">Type: {type}</li>
                                                <li className="mb-1">Serial: {serial}</li>
                                                <li className="mb-1">Status: {status}</li>
                                                <li className="mb-1">Location: {last_update}</li>
                                                    
                                                    
                                                    
                                                    
                                                
                                            </ul>
                                        </article>
                                    ))
                                }
                            </div>
                        </article>
                    </div>
                </section >)
            }
        </>
    )
};


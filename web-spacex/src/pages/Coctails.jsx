import { useState, useEffect } from "react";
import { Loading } from "../Components";
import { Link } from "react-router-dom";

export default function Coctails() {

    const [coctails, setCoctails] = useState([]);


    useEffect(() => {
        const fetchCoctails = async () => {
            const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
            const data = await res.json();
            setCoctails(data);
            console.log(data);
        }
        fetchCoctails();
    }, []);


    return (
        <>
            {!coctails.drinks ? (<Loading />) : (
                <section className="py-40">
                    <div >
                        <article>
                            <h1 className="heading text-center pb-16 ">Coctails (overall {coctails.drinks.length} )</h1>
                            <div className="max-width grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 ">
                                {
                                    coctails.drinks.map(({ idDrink, strDrink, strDrinkThumb }) =>
                                    (<Link key={idDrink} to={`/coctails/${idDrink}`}>
                                        <article className="fit-content articles rounded-lg flex flex-col align-center justify-between" key={idDrink}>
                                            <h2 className="text-center font-bold text-xl sm:text-lg md:text-lg py-5">{strDrink}</h2>
                                            <img className="scale-75 rounded-lg" src={strDrinkThumb} alt="pav" />
                                        </article>
                                    </Link>
                                    ))
                                }
                            </div>
                        </article>
                    </div>
                </section >)
            }
        </>
    )

}
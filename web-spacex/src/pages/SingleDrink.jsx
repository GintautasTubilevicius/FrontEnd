import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../Components"
import axios from 'axios';

export default function SingleDrink() {
    const [singleDrink, setSingleDrink] = useState([])
    const { idDrink } = useParams()

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            .then(res => setSingleDrink(res.data));
    }, [idDrink]);

    return (
        <>
            {!singleDrink.drinks ? (<Loading />) : (
                <section className="py-40 px-10">
                    {
                        singleDrink.drinks.map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory, strInstructions
                        }) =>
                            <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5" key={idDrink}>
                                <article>
                                    <img src={strDrinkThumb} alt="pav" />
                                </article>

                                <article>
                                    <h1 className="heading mb-10">{strDrink}</h1>
                                    <h2 className="font-bold text-white mb-5 text-lg">Details</h2>
                                    <ul className="text-white opacity-75 text-sm">
                                        <li className="mb-2">Category: {strCategory}</li>
                                        {strAlcoholic !== "Alcoholic" ? (
                                            <li className="text-lg text-emerald-500 capitalize my-6">
                                                {strAlcoholic}
                                            </li>
                                        ) : (
                                            <li className="text-lg text-rose-500 capitalize my-6">
                                                {strAlcoholic}
                                            </li>
                                        )}
                                        <li className="mb-2">Instructions: {strInstructions}</li>
                                    </ul>

                                    <ul>
                                        <li className="text-lg text-white opacity-75 text-sm hover:opacity-100">
                                            <Link to="/drinks"><button type="button" class="text-white-900 hover:text-white border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">&larr; Back to coctails</button></Link>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        )
                    }

                </section >)
            }
        </>
    )
}
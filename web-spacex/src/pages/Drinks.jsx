import { useState, useEffect } from "react";
import { Loading } from "../Components";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Drinks() {

    const [drinks, setDrinks] = useState([]);


    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(res => setDrinks(res.data));
    }, []);


    return (
        <>
            {!drinks.drinks ? (<Loading />) : (
                <section className="py-40">
                    <div >
                        <article>
                            <h1 className="heading text-center pb-16 ">Drinks (overall {drinks.drinks.length} )</h1>
                            <div className="max-width grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-5 ">
                                {
                                    drinks.drinks.map(({ idDrink, strDrink, strDrinkThumb }) =>
                                    (<Link key={idDrink} to={`/drinks/${idDrink}`}>
                                        <article className="articles rounded-lg flex flex-col align-center justify-center content-center" key={idDrink}>
                                            <h2 className="text-center font-bold text-2xl py-5 ">{strDrink}</h2>
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
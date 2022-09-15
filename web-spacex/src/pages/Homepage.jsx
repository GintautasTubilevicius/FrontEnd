import { useState, useEffect } from "react";
import { Loading } from "../Components";
import Letter from "../Components/Letter";

export default function Homepage() {

    const [random, setRandom] = useState(null);

    useEffect(() => {
        const fetchRandom = async () => {
            const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await res.json();
            setRandom(data);
            console.log(data)
        }
        fetchRandom();
    }, []);

    return (
        <>

            {!random ? <Loading /> :
                <section className="showcase">
                    <div className="overlay">
                        <article>

                            <h1 className="heading text-center pb-16">
                                Todays drink
                            </h1>
                            <div class="relative flex py-5 items-center">
                                <div class="flex-grow border-t border-white"></div>
                            </div>
                            <div>
                                <ul>
                                    <li className="text-white text-4xl text-center">{random.drinks[0].strDrink}</li>
                                    <li><img className="scale-75" src={random.drinks[0].strDrinkThumb} alt={random.drinks[0].strDrink} /></li>

                                </ul>
                            </div>
                            <div class="relative flex py-5 items-center">
                                <div class="flex-grow border-t border-white"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white">Browse By Name</h3>
                                <Letter className="text-lg" />
                            </div>
                        </article>
                    </div>
                </section>}
        </>
    )
};
import { useState, useEffect } from "react";
import { Loading } from "../Components";
// import { Link } from "react-router-dom";

export default function Test2() {

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



                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    
                                    <tbody>
                                        <tr>
                                           
                                            {
                                                coctails.drinks.map(({ idDrink, strDrink, strDrinkThumb }) =>
                                                (<td key={idDrink} classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <img className="hover:grow hover:shadow-lg" src={`${strDrinkThumb}/preview`} alt="pav" />
                                                </td>


                                                ))
                                            }


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>




            )
            }
        </>
    )
}


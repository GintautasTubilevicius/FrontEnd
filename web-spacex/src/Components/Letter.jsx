import React from 'react';
import { Link } from "react-router-dom";

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function Letter() {


    return (
        <>
            <div className="text-white text-lg">
                {
                    letters.map((l, i) => <Link to={`/list/${l}`}> <span key={i}>{l} / </span> </Link> )
                }
            </div>
        </>
    )
}
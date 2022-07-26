import { useEffect } from "react";
import { useState } from "react";
import randColor from "../../Functions/randColor";

function Word({color}) {

    const [good, setGood] = useState(null);

    useEffect( () => {
        setGood(color);
    }, [color]);


    return (
        <>
        <h1 style={{color: good}}>GOOOOOOD!</h1>
        <button onClick={() => setGood(randColor())}>change good</button>
        </>
    );
}

export default Word;
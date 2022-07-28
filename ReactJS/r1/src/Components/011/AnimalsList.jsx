import { useState } from "react";

function AnimalsList() {

    const [animal, setAnimal] = useState('');
    const [age, setAge] = useState('');
    const [list, setList] = useState([]);

    const add = () => {
        setList(l => [...l, { animal, age }]);
        setAnimal('');
        setAge('');
    }
    // const sort = () => {
    //     setList(l => [...l].sort((a, b) => {
    //         if (a.animal < b.animal) { return -1; }
    //         if (a.animal > b.animal) { return 1; }
    //         return 0;
    //     }))
    // }
    const sort = () => {
        setList(l => [...l].sort((a, b) => a.animal.localeCompare(b.animal)))
    }

    return (
        <div className="animals-list">
            <div className="inputs">

                <div className="input">
                    <span>Animal:</span>
                    <input type="text" value={animal} onChange={e => setAnimal(e.target.value)}></input>
                </div>

                <div className="input">
                    <span>Age:</span>
                    <input type="text" value={age} onChange={e => setAge(e.target.value)}></input>
                </div>

                <button className="red" onClick={add}>Add</button>
            </div>
            <div className="list">
                {
                    list.map((a, i) => <div key={i}><b>{i + 1}.</b> <span>{a.animal}</span> <i>Age: {a.age} years</i></div>)
                }
                <button className="red" onClick={sort}>Sort</button>
            </div>
            

        </div>
    )


}

export default AnimalsList;
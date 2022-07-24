import randColor from "../../Functions/randColor";

function B3({ setRandColor }) {
    
    return (
            <button onClick={() => setRandColor(randColor())}>Spalva</button>
    )
}
export default B3;
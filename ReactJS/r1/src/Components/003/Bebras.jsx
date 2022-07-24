import RedCircle from "./RedCircle";
import rand from "../../Functions/rand";
import BlueCircle from "./BlueCircle";
import randColor from "../../Functions/randColor";

function Bebras() {

    return (
    <>
    <h2>Hello, Bebrai! { rand(10, 20) }</h2>
    {rand(0, 1) ? <RedCircle/> : <BlueCircle/>}
    <div className="container">
    {
        [...Array(5)].map((_, i) => <BlueCircle key={i}/>)
    }
    </div>
    <div className="container">
    {
        [...Array(6)].map((e, i) => i % 2 ? <BlueCircle key={i}/> : <RedCircle key={i}/>)
    }
    </div>
    <div className="container">
    {
        [...Array(10)].map((_, i) => <div className="circle" key={i} style={{backgroundColor: randColor()}}></div>)
    }
    </div>
    </>
    );
}


export default Bebras;
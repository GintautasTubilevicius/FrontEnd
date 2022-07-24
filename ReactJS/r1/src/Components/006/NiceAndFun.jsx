import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";
import Sq4 from "./Sq4"
import Sq5 from "./Sq5"
import Sq6 from "./Sq6"



function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36); //Hook
    const [bg, setBg] = useState('white');
    const [sk, setSk] = useState(0);
    const [kv, setKv] = useState([]);
    const [kv1, setKv1] = useState([]);
    const [kv2, setKv2] = useState([]);
    const [sq4, setSq4] = useState([]);
    const [sq5, setSq5] = useState([]);
    const [sq6, setSq6] = useState([]);

    const doSize = () => {
        setSize(s => s === 36 ? 56 : 36);
    }

    const doBg = () => {
        setBg(s => s === 'white' ? 'black' : 'white');
    }

    const doSk = () => {
        setSk(s => s + rand(5, 10));
    }

    const doKvadratas = () => {
        setKv(s => ([...s, '']))
    }

    const doKvadratasRand = () => {
        setKv1(s => ([...s, randColor()]))
    }

    // const doKvadrataiTrinti = () => {
    //     setKv(s => (s = []))
    // }
    const doKvadratasRandSk = () => {
        setKv2(s => ([...s, {
            color: randColor(),
            number: rand(50, 99)
        }]))
    }

    const doSq4 = () => {
        setSq4(s => ([...s, '']))
    }
    const doSq5 = () => {
        setSq5(s => ([...s, '']))
    }

    const doSq6 = () => {
        setSq6(s => ([...s, '']))
    }

    return (
        <>
            <h2 style={
                {
                    color: spalva,
                    fontSize: size + 'px',
                    backgroundColor: bg
                }
            }>Braškė</h2>
            <h2>{sk}</h2>
            <div className="container">
                <button onClick={doSize}>Size</button>
                <button onClick={doBg}>Fonas</button>
                <button onClick={doSk}>Sk+rand</button>
                <button className="blue" onClick={doKvadratas}>Kv</button>
                <button className="blue" onClick={doKvadratasRand}>KvRand</button>
                <button className="red" onClick={() => setKv([])}>KvTrinti</button>
                {/* <button className="red" onClick={() => setKv1(s => s.slice(1, s.lenght) )}>TrintiSpal</button> */}
                <button className="red" onClick={() => setKv1(s => s.filter((_, i) => i))}>TrintiSpal</button>
                <button className="blue" onClick={doKvadratasRandSk}>KvRandSk</button>
                <button className="blue" onClick={doSq4}>Sk0</button>
                <button className="blue" onClick={doSq5}>KvAp</button>
                <button className="blue" onClick={doSq6}>KvApirSk</button>
            </div>
            <div className="container">
                {
                    kv.map((_, i) => <div className='square' key={i}> {i + 1} </div>)
                }
            </div>
            <div className="container">
                {
                    kv1.map((c, i) => <div className='square' style={{ backgroundColor: c }} key={i}>  </div>)
                }
            </div>
            <div className="container">
                {
                    kv2.map((c, i) => <div className='square' style={{ backgroundColor: c.color }} key={i}>{c.number}  </div>)
                }
            </div>
            <div className="container">
                {
                    sq4.map((_, i) => <Sq4 key={i}> </Sq4>)
                }
            </div>
            <div className="container">
                {
                    sq5.map((_, i) => <Sq5 key={i}> </Sq5>)
                }
            </div>
            <div className="container">
                {
                    sq6.map((_, i) => <Sq6 key={i}> </Sq6>)
                }
            </div>


        </>
    )

}

export default NiceAndFun;
import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import randColor from '../Functions/randColor';
import BooksContext from './BooksContext';

function Books() {

    const [books, setBooks] = useState(null);
    const [types, setTypes] = useState(null);
    const [cat, setCat] = useState(0);
    const [sort, setSort] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => setBooks(res.data.map((b, i) => ({
                ...b,
                color: randColor(),
                show: true,
                row: i
            }))));
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
            .then(res => setTypes(res.data));
    }, []);

    useEffect(() => {
        setBooks(b => b?.map(book => ({
            ...book,
            show: (cat === 0 || cat === book.type) ? true : false
        })))

    }, [cat]);

    useEffect(() => {
        switch (sort) {
            case 0:
                setBooks(b => b ? [...b].sort((a, b) => a.row - b.row) : null);
                break;
            case 1:
                setBooks(b => b ? [...b].sort((a, b) => a.price - b.price) : null);
                break;
            case 2:
                setBooks(b => b ? [...b].sort((a, b) => b.price - a.price) : null);
                break;
            default:
        }
    }, [sort]);

    const addToCart = (id, count) => {

        setCart(c => {
            const inCart = c.find(b => b.id === id);
            if (!inCart) {
                return [...c, { id, count: count }]
            }
            return c.map(b => b.id === id ? { ...b, count: b.count + count } : { ...b });
        });
    }

    const removeItem = id => {
        setCart(c => c.filter(item => item.id !== id));
    }

    return (
        <BooksContext.Provider value={{
            addToCart
        }}>
            <div className="cart-bin">
                <div className="cart">
                    <span>{cart.length}</span>
                    <svg>
                        <use href="#cart"></use>
                    </svg>
                    <div className="cart-list">
                        <b>Knygos krepšelyje</b>
                        {
                            cart.map((b, i) =>
                                <div key={i}>
                                    {books?.find(bo => bo.id === b.id).title}
                                    <i>{b.count}</i>
                                    <b onClick={() => removeItem(b.id)}>X</b>
                                </div>)
                        }
                    </div>

                </div>
            </div>
            <div className="select-list">
                {types ?
                    <div className="container">
                        <select value={cat} onChange={e => setCat(parseInt(e.target.value))}>
                            <option value="0">Visos kategorijos</option>
                            {
                                types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                            }
                        </select>
                    </div> : null
                }
                <div className="container">
                    <select value={sort} onChange={e => setSort(parseInt(e.target.value))}>
                        <option value="0">Pradinis</option>
                        <option value="1">Kaina min-max</option>
                        <option value="2">Kaina max-min</option>
                    </select>
                </div>
            </div>


            <ul className="books-list">
                {
                    books ? books.map(b =>
                        b.show ?
                            <Book key={b.id} book={b} cat={types?.find(t => t.id === b.type).title ?? '...loading'} />
                            : null
                    ) : <li className="loader"></li>
                }
            </ul>
        </BooksContext.Provider>
    )

}

export default Books;


// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import Book from './Book';
// import randColor from '../../Functions/randColor';

// function Books() {

//     const [books, setBooks] = useState(null);
//     const [cat, setCat] = useState(null);
//     const [select, setSelect] = useState(0);
//     const [sort, setSort] = useState(0);
//     const [count, setCount] = useState(0);
//     const [cart, setCart] = useState([]);

//     const trackID = useRef(1);

//     useEffect(() => {
//         axios.get('https://in3.dev/knygos/')
//             .then(res => setBooks(res.data.map((b, i) => ({
//                 ...b,
//                 color: randColor(),
//                 show: true,
//                 trackID: trackID.current++,
//                 row: i
//             }))));
//     }, []);

//     useEffect(() => {
//         axios.get('https://in3.dev/knygos/types/')
//             .then(res => setCat(res.data));
//     }, []);

//     useEffect(() => {

//         setBooks(b => b?.map(book => ({ ...book, show: (select === 0 || select === book.type) ? true : false })));

//     }, [select]);

//     // const sortPrice = () => {
//     //     setBooks(b => [...b].sort((a, b) => a.price - b.price))
//     // }

//     // const sortPriceDes = () => {
//     //     setBooks(b => [...b].sort((a, b) => b.price - a.price))
//     // }

//     // const sortPricePradzia = () => {
//     //     setBooks(b => [...b].sort((a, b) => a.trackID - b.trackID))
//     // }

//     useEffect(() => {
//         switch (sort) {
//             case 0:
//                 setBooks(b => b ? [...b].sort((a, b) => a.row - b.row) : null);
//                 break;
//             case 1:
//                 setBooks(b => b ? [...b].sort((a, b) => a.price - b.price) : null);
//                 break;
//             case 2:
//                 setBooks(b => b ? [...b].sort((a, b) => b.price - a.price) : null);
//                 break;
//             default:
//         }
//     }, [sort]);


//     return (
//         <>
//             <div className='cart'>
//                 <svg>
//                     <use href="#cart"></use>
//                 </svg>
//                 <span>{count}</span>
//                 <div className="cart-list">
//                     {
//                         cart.map((e, i) => <div key={i}>{e}</div>)
//                     }
//                 </div>

//             </div>
//             <div className="container">
//                 <select className='select-book' value={select} onChange={e => setSelect(parseInt(e.target.value))}>
//                     <option value="0">Visos</option>
//                     {
//                         cat?.map(t => <option key={t.id} value={t.id}> {t.title}</option>)
//                     }
//                 </select>
//                 <select className='select-book' value={sort} onChange={e => setSort(parseInt(e.target.value))}>
//                     <option value="0">Pradinis</option>
//                     <option value="1">Kaina min-max</option>
//                     <option value="2">Kaina max-min</option>
//                 </select>
//                 {/* <button onClick={sortPricePradzia}>Pradinis</button>
//                 <button onClick={sortPrice}>Sort price Didejimo</button>
//                 <button onClick={sortPriceDes}>Sort price Mazejimo</button> */}
//             </div>
//             <ul className="books-list">
//                 {
//                     books ? books.map(b =>
//                         b.show ?
//                             <Book key={b.id} book={b} cat={cat} setCount={setCount} setCart={setCart} />
//                             : null
//                     ) : <li className="loader"></li>
//                 }
//             </ul>
//         </>
//     )

// }

// export default Books;
import { useContext, useState } from 'react';
import BooksContext from './BooksContext';


function Book({ book, cat }) {

    const { addToCart } = useContext(BooksContext);
    const [count, setCount] = useState(1);

    const addToCartLocal = (id, c) => {
        setCount(1);
        addToCart(id, c);
    }

    const goUp = () => {
        setCount(c => c + 1);
    }

    const goDown = () => {
        setCount(c => Math.max(1, c - 1));
    }

    return (
        <li className="li-book" style={{ backgroundColor: book.color + '40' }}>
            <div className="cat">{cat}</div>
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <div className="author">{book.author}</div>
            <div className="bottom">
                <button className="green" onClick={() => addToCartLocal(book.id, count)}>Pirkti</button>
                <div className="counter">
                    <svg className="up" onClick={goUp}>
                        <use href="#arrow"></use>
                    </svg>
                    <span>{count}</span>
                    <svg className="down" onClick={goDown}>
                        <use href="#arrow"></use>
                    </svg>
                </div>
                <div className="price">{book.price} EUR</div>
            </div>
        </li>
    )

}

export default Book;

// function Book({ book, cat, setCount, setCart }) {

//     const shopCart = () => {
//         setCount(c => c + 1);
//         setCart(c => [...c, book.title]);
//     }

//     return (
//         <li className="li-book" style={{ backgroundColor: book.color + '40' }}>
//             <div className="cat">
//                 {
//                     cat ? cat.find(c => book.type === c.id)?.title : 'Be kategorijos'
//                 }
//             </div>
//             <h2>{book.title}</h2>
//             <img src={book.img} alt={book.title} />
//             <div className="author">{book.author}</div>
//             <div className="price">{book.price} EUR</div>
//             <button className="green" onClick={shopCart}>Pirkti</button>
//         </li>
//     )

// }

// export default Book;
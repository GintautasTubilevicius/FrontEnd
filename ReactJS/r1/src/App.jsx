import './App.scss';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Plants from './Components/022/Plants';
import Animals from './Components/022/Animals';
import Home from './Components/022/Home';
import Sea from './Components/022/Sea';
import DataContext from './Components/022/DataContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Brands from './Components/022/Brands';
import { useCallback } from 'react';


const animalsData = {
    fox: { color: 'brown', tail: 'Long', type: 'Fox' },
    wolf: { color: 'grey', tail: 'Medium', type: 'Wolf' },
    rabbit: { color: 'white', tail: 'Short', type: 'Rabbit' }
}

const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'Zil', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
]


function App() {

    const [brands, setBrands] = useState([]);


    // const simple1 = () => {
    //     console.log('im simple');
    // }

    const simple = useCallback(() => {
        console.log('im simple');
    }, []);

    useEffect(() => {
        simple();
    }, [simple]);

    useEffect(() => {
        axios.get('https://in3.dev/vinted/api/brands/all')
            .then(res => setBrands(res.data));
    }, []);

    return (
        <DataContext.Provider value={{
            seaPlaners,
            brands
        }}>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>Router</h1>
                        <div className="container">
                            <Link to="/">Home page</Link>
                            <Link to="/animals/nice-fox">Fox</Link>
                            <Link to="/animals/fast-rabbit">Rabbit</Link>
                            <Link to="/animals/big-wolf">Wolf</Link>
                            <Link to="/plants">Plants</Link>
                        </div>
                        <div className="container">
                            {
                                seaPlaners.map(s => <Link to={"/sea/" + s.id} key={s.id}>{s.name}</Link>)
                            }
                        </div>

                        <div className="container">
                            {
                                brands.map(s => <Link to={"/brand/" + s.id} key={s.id}>{s.title}</Link>)
                            }
                        </div>
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/animals/nice-fox" element={<Animals show={animalsData.fox} />}></Route>
                                <Route path="/animals/big-wolf" element={<Animals show={animalsData.wolf} />}></Route>
                                <Route path="/animals/fast-rabbit" element={<Animals show={animalsData.rabbit} />}></Route>
                                <Route path="/plants" element={<Plants />}></Route>
                                <Route path="/sea/:seaId" element={<Sea />}></Route>
                                <Route path="/brand/:id" element={<Brands />}></Route>

                            </Routes>
                        </div>
                    </header>
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
}
export default App;
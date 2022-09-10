import './App.scss';
import React from 'react';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {

    return (
        <div className="App">
            <React.StrictMode>
                <header className="App-header">
                    <h1>Uzduotis REACT BASE LIST</h1>
                    <div className="container">
                        {
                            [...dogs].map((d, i) => <div className='sc' key={i}>{d}</div>)
                        }
                    </div>
                    <div className="container">
                        {
                            [...dogs].sort((a, b) => b.length - a.length).map((d, i) => <div className='circle' key={i}>{i + 1}.{d}</div>)
                        }
                    </div>
                    <div className="container">
                        {
                            [...dogs].map((d, i) => i % 2 === 0 ? <div className='sc' key={i}>{i}.{d}</div> : <div className='circle' key={i}>{i}.{d}</div>)
                        }
                    </div>
                    <div className="container">
                        {
                            [...dogs].map((d, i) => d[0].toUpperCase() === d[0] ? null : <div className='sc' key={i}>{d}</div>)
                        }
                    </div>
                    <div className="container">
                        {
                            [...dogs].map((d, i) => <div className='sc' key={i} style={{ color: d.length > 6 ? 'green' : 'red' }}>{d.length}</div>)
                        }
                    </div>
                </header>
            </React.StrictMode>
        </div>
    );
}
export default App;
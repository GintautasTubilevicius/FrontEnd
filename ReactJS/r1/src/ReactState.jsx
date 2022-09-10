import './App.scss';
import React from 'react';
import Change from './Components/ReactState/Change';
import Plus from './Components/ReactState/Plus';
import Add from './Components/ReactState/Add';
import Colors from './Components/ReactState/Colors';


function App() {


    return (
        <div className="App">
            <React.StrictMode>
                <header className="App-header">
                    <h1>Uzduotis REACT STATE</h1>
                    <Change/>
                    <Plus/>
                    <Add/>
                    <Colors/>
                </header>
            </React.StrictMode>
        </div>
    );
}
export default App;
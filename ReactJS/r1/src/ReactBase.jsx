import './App.scss';
import React from 'react';
import Labas from './Components/ReactBase/Labas';
import Props from './Components/ReactBase/Props';
import Zb from './Components/ReactBase/Zb';
import Text from './Components/ReactBase/Text';

function App() {


    return (
        <div className="App">
            <React.StrictMode>
                <header className="App-header">
                    <h1>Uzduotis REACT BASE</h1>
                    <Labas/>
                    <Props tekstas={'Labas raudonkepuraite'} />
                    <Zb color={2} />
                    <Text tekstas1={'Pirma eilute'} tekstas2={'Antra eilute'} color={'green'}/>
                    
                </header>
            </React.StrictMode>
        </div>
    );
}
export default App;
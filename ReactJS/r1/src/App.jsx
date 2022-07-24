import './App.scss';
import { useState } from 'react';
import Buttons from './Components/008/Buttons';
import View from './Components/008/View';
import HelloWorld from './Components/008/HelloWorld';
import SqRand from './Components/008/SqRand';
import HelloWorld2 from './Components/008/HelloWorld2';
import SC from './Components/008/SC';



function App() {

    const [view, setView] = useState(0);



    return (
        <div className="App">
            <header className="App-header">
                <>
                    <Buttons setView={setView}></Buttons>
                    <View view={view} number={1} element={<SqRand/>}></View>
                    <View view={view} number={2} element={<HelloWorld/>}></View>
                    <View view={view} number={3} element={<HelloWorld2/>}></View>
                    <View view={view} number={4} element={<SC/>}></View>
                    
                    
                </>
            </header>
        </div>
    );
}

export default App;
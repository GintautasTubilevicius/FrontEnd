import './App.scss';
import A3 from './Components/016/A3';
import ContextAbc from './Components/016/ContextAbc';



function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Contex</h1>
                <ContextAbc.Provider value={
                    {
                        text: 'ABC'
                    }
                }>
                    <A3></A3>
                </ContextAbc.Provider>
            </header>
        </div>
    );
}
export default App;
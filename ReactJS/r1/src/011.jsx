import './App.scss';
import AnimalsList from './Components/011/AnimalsList';
import CheckBox from './Components/011/CheckBox';
import CheckBox2 from './Components/011/CheckBox2';
import List from './Components/011/List';


function App() {

  
    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Control 2</h1>
                <List></List>
                <AnimalsList></AnimalsList>
                <CheckBox></CheckBox>
                <CheckBox2></CheckBox2>
            </header>
        </div>
    );
}

export default App;
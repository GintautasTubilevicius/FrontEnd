import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage, Error, Capsules, Coctails, SingleCoctail, Drinks, SingleDrink, Test, Test2, Gin } from "./pages";
import {Header} from "./Components";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/capsules" element={<Capsules/>}></Route>
        <Route path="/coctails" element={<Coctails/>}></Route>
        <Route path="/coctails/:idDrink" element={<SingleCoctail />}></Route>
        <Route path="/drinks" element={<Drinks/>}></Route>
        <Route path="/drinks/:idDrink" element={<SingleDrink />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/test2" element={<Test2 />}></Route>
        <Route path="/gin" element={<Gin />}></Route>
        <Route path="/list/:letter" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

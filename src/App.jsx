import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
      <div className='App'>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route patch='/' element={<ItemListContainer />} />
          <Route patch='/shopp/:shoppId' element={<ItemDetailContainer />} />
          <Route patch='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

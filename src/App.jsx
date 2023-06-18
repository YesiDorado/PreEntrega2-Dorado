import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/index";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import FooterPag from "./components/FooterPag/FooterPag";
import Nosotros from "./components/Nosotros/Nosotros";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          
          <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/shopp/:shoppId' element={<ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />


          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      
      </BrowserRouter>
      <hr />
      <hr />
      <Carrusel />
      <hr />
      <hr />
      <FooterPag />
    </div>
  );
}

export default App;

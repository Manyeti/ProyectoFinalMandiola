import './App.css';
/* import Destacado2 from './components/Destacado2';  */
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div> 
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/categorias/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/*"} element={<Error />} />
        </Routes>
        <Carrousel /> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

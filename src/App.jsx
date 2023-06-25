import './App.css';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import Gracias from './components/Gracias';


function App() {
  return (
    <div> 
      <CartContextProvider>
        <BrowserRouter >
          <Header />
          <Routes >
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categorias/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/gracias/:orderId"} element={<Gracias />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error />} />
          </Routes>
          <Carrousel /> 
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

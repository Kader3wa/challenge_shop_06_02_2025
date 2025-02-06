import { useContext } from 'react';
import './App.css'
import Header from './components/Header';
import Products from './components/Products';
import { CartContext } from './contexts/CartContext';
import CartDetail from './components/CartDetail';

const App = () => {

  const cartContext = useContext(CartContext);

  return (
    <>
      <Header />
      <main>
        <Products />
        <CartDetail />
      </main>
    </>
  )
}

export default App;

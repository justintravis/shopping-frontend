import { Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import ShoppingContainer from './ShoppingContainer';
import ItemPage from './ItemPage/ItemPage';
import  { CartProvider } from './CartContext';

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <CartProvider>
            <Layout storeName={`Justin's Store`} />
          </CartProvider>
        }>
          <Route index element={
            <ShoppingContainer />
          } />
          <Route path="/item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

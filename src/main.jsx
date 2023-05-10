import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FiltersProvider } from './context/filterContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/cartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </FiltersProvider>
  </React.StrictMode>
);

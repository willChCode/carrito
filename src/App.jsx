import React, { useState } from 'react';
import Products from './components/Products';
import { products as initialState } from './mocks/products.json';
import Filtrado from './components/Filtrado';
import Footer from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './hooks/useFilters';
import Header from './components/Header';

//custom hooks

function App() {
  const [products] = useState(initialState);

  const { filterProduct, filters } = useFilters();
  const filteredProducts = filterProduct(products);

  return (
    <main className='w-full p-[2rem]'>
      <Header />
      <Filtrado />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </main>
  );
}

export default App;

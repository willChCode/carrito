import React from 'react';
import { useFilter } from '../context/filterContext';
import { useCart } from '../hooks/useCart';

function Footer() {
  const { filters } = useFilter();
  const { cart } = useCart();

  return (
    <footer className='fixed left-[16px] bottom-[16px] text-left bg-neutral-600 py-2 px-6 rounded-lg opacity-95 backdrop-blur-sm text-white'>
      {JSON.stringify(filters, null, 2)}
      {/* <p>{JSON.stringify(cart, null, 2)}</p> */}
    </footer>
  );
}

export default Footer;

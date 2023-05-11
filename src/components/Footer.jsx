import React from 'react';
import { useFilter } from '../context/filterContext';
import { useCart } from '../hooks/useCart';

function Footer() {
  const { filters } = useFilter();
  const { cart } = useCart();

  return (
    <footer className='fixed left-[16px] bottom-[16px] text-left bg-neutral-600 py-2 px-6 rounded-lg opacity-95 backdrop-blur-sm text-white'>
      <p className='text-center text-red-400 font-bold'>willCh 💤 Dev</p>
      {JSON.stringify(filters, null, 2)}
      <p>cart: {cart ? 'cargo correctamente' : 'no cargo correctamente'}</p>
    </footer>
  );
}

export default Footer;

import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

export const useCart = () => {
  const context = useContext(cartContext);

  if (!context === undefined) {
    throw new Error('useCart must be used  within a cartProvider');
  }

  return context;
};

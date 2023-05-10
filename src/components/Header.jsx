import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

function Header() {
  const { cart, clearCart } = useCart();
  const { items } = cart;
  const { totalQuantity } = cart;

  return (
    <div className='flex gap-6 items-center justify-center mb-4'>
      <h2 className='font-bold text-2xl'>Ecommerce</h2>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>
                {totalQuantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='font-bold text-lg'>{totalQuantity} Items</span>
              <span className='text-info'>
                Subtotal: $
                {items.reduce(
                  (acm, item) => acm + item.price * item.quantity,
                  0
                )}
                {/* {cart.items.reduce((acm, valor) => acm + valor.price)} */}
              </span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-md btn-block'>
                  <Link to='/cart'>View cart</Link>
                </button>
                <button
                  onClick={clearCart}
                  className='btn btn-secondary btn-md btn-block'>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

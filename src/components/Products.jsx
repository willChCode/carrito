import React from 'react';
import { useCart } from '../hooks/useCart';

function Products({ products }) {
  const { cart, addCart } = useCart();

  // console.log(cart[0].quantity);
  return (
    <div>
      <ul className='flex flex-wrap gap-4 items-center justify-center'>
        {products.slice(0, 10).map(product => (
          <li key={product.id} className='w-52'>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>
                {product.title} - ${product.price}
              </strong>
            </div>
            <button onClick={() => addCart(product)} className='btn btn-sm'>
              add Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

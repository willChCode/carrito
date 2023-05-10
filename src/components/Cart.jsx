import React from 'react';
import { useCart } from '../hooks/useCart';
import { HiOutlineXCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, updateCart } = useCart();
  const { items } = cart;
  console.log(items);

  return (
    <main className='w-full p-[2rem]'>
      <h1 className='mb-4 text-xl font-bold'>Cart Items</h1>
      <p>Cantidad Total: {cart.totalQuantity}</p>
      <p>
        Precio Total:{' '}
        {items.reduce((acm, valor) => acm + valor.price * valor.quantity, 0)}
      </p>
      {items.length === 0 ? (
        <div>
          Cart is empty.{' '}
          <Link className='link link-primary' to='/'>
            Go Shopping...
          </Link>
        </div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div className='overflow-x-auto md:col-span-3'>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr>
                  <th className='px-5 text-left'>Item</th>
                  <th className='p-5 text-right'>Quantity</th>
                  <th className='p-5 text-right'>Price</th>
                  <th className='p-5'>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className='border-b'>
                    <td>
                      {/* <Link href={`/product/${item.slug}`}> */}
                      <span className='flex items-center'>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          width={50}
                          height={50}
                        />{' '}
                        &nbsp; {item.title}
                      </span>
                      {/* </Link> */}
                    </td>
                    <td className='p-5 text-right'>
                      <select
                        className='outline-none'
                        value={item.quantity}
                        onChange={e => updateCart(item, e.target.value)}>
                        {[...Array(item.stock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      {/* <select
                        className='outline-none'
                        value={item.quantity}
                        onChange={e => updateCartHandler(item, e.target.value)}>
                        {[...Array(item.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                    </td>
                    <td className='p-5 text-right'>$ {item.price}</td>
                    <td className='p-5 text-center'>
                      <button>
                        <HiOutlineXCircle
                          onClick={() => {}}
                          className='h-5 w-5'></HiOutlineXCircle>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className='card p-5 font-bold'>
            <ul>
              <li>
                <div className='pb-3 text-lg'>
                  Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)} ) :
                  ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className='primary-button w-full'>
                  Check Out
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      )}
    </main>
  );
}

export default Cart;

import { createContext, useState } from 'react';

//contexto
export const cartContext = createContext();

// hook

// provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0
  });

  const addCart = product => {
    //check ifthe product is already in the cart
    const productInCartIndex = cart.items.findIndex(
      item => item.id === product.id
    );

    if (productInCartIndex >= 0) {
      //usando structuredClone, no spreed por que falla en archivos grandes
      const newCart = structuredClone(cart);
      newCart.items[productInCartIndex].quantity += 1;

      const newTotalQuantity = cart.totalQuantity + 1;

      return setCart({
        items: newCart.items,
        totalQuantity: newTotalQuantity
      });
    }
    //producto no esta en el carrito
    const newCartItem = { ...product, quantity: 1 };
    const newItems = [...cart.items, newCartItem];
    const newTotalQuantity = cart.totalQuantity + 1;
    setCart({
      items: newItems,
      totalQuantity: newTotalQuantity
    });
  };

  // Solucionar
  const updateCart = (product, quantity) => {
    //buscamos si existe el producto en el carrito
    const productIndex = cart.items.findIndex(item => item.id === product.id);

    if (productIndex >= 0) {
      // copiamos todo los datos en una nueva constante
      const updateItems = [...cart.items];
      // actualizamos la cantidad del item por la cantidad que vienedel quantity que seria el e.target.value
      // error solucionado se tenia que convertir a numero la cantidad
      updateItems[productIndex].quantity = parseInt(quantity);
      // sumamos la cantidad del item a lacantidad total
      const totalQuantity = updateItems.reduce(
        (acc, item) => acc + parseInt(item.quantity),
        0
      );
      // actualizamos el nuevo carrito con los nuevos items y nueva cantidad
      const updatedCart = {
        items: updateItems,
        totalQuantity: totalQuantity
      };
      setCart(updatedCart);
    }
  };

  //eliminar encontrando por id
  const deleteCartById = product => {
    const newCart = cart.items.filter(item => item.id !== product.id);
    const totalQuantity = newCart.reduce(
      (acc, item) => acc + parseInt(item.quantity),
      0
    );
    const updateCart = {
      items: newCart,
      totalQuantity: totalQuantity
    };

    setCart(updateCart);
  };

  const clearCart = () => setCart({ items: [], totalQuantity: 0 });

  return (
    <cartContext.Provider
      value={{ cart, addCart, clearCart, updateCart, deleteCartById }}>
      {children}
    </cartContext.Provider>
  );
}

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) =>  {
    const existingItem = prev.find(item => item.id === product.id);

    if (existingItem) {
      // increase quantity
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // add new item with quantity 1
    return [...prev, { ...product, quantity: 1 }];
  }
    );
  };

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

console.log(total)

  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
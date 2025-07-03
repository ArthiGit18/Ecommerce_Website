'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const increaseQty = (id) => setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));

  const decreaseQty = (id) => setCart(prev => prev.map(p => p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
'use client';

import { useCart } from '@/lib/cartContext';

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> :
        cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 border p-4 mb-2">
            <img src={item.image} className="h-16 w-16 object-contain" />
            <div className="flex-1">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => decreaseQty(item.id)} className="bg-gray-300 px-2">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)} className="bg-gray-300 px-2">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-600">Delete</button>
          </div>
        ))}
    </div>
  );
}
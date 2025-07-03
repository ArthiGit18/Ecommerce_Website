'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';

export default function ProductCard({ product }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const inCart = cart.find(p => p.id === product.id);

  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-md font-semibold mt-2">{product.title}</h2>
      <p className="text-sm">${product.price}</p>
      <div className="mt-2 flex justify-between items-center">
        <Link href={`/product/${product.id}`} className="text-blue-500">View</Link>
        {inCart ? (
          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(product.id)} className="bg-gray-300 px-2">-</button>
            <span>{inCart.quantity}</span>
            <button onClick={() => increaseQty(product.id)} className="bg-gray-300 px-2">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-2 py-1 rounded">Add to Cart</button>
        )}
      </div>
    </div>
  );
}
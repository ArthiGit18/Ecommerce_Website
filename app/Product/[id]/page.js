'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const inCart = cart.find(p => p.id === product.id);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="h-64 w-64 object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-semibold my-2">${product.price}</p>
        {inCart ? (
          <div className="flex items-center gap-2 mt-3">
            <button onClick={() => decreaseQty(product.id)} className="bg-gray-300 px-3 py-1 rounded">-</button>
            <span>{inCart.quantity}</span>
            <button onClick={() => increaseQty(product.id)} className="bg-gray-300 px-3 py-1 rounded">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)} className="bg-green-600 text-white px-4 py-2 mt-3 rounded">Add to Cart</button>
        )}
      </div>
    </div>
  );
}
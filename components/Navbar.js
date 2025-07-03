'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-10">
      <Link href="/" className="text-xl font-bold">E-Store</Link>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cart">Cart 🛒 {count}</Link></li>
      </ul>
    </nav>
  );
}

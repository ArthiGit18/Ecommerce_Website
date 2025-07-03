'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json') // ✅ fetches from public folder
            .then(res => res.json())
            .then(setProducts)
    }, [])

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

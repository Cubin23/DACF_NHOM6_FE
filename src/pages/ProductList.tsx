import React, { useEffect, useState } from 'react';
import { mockPerfumes, type Perfume } from '../types/product/products';

export default function PerfumeList() {
  const [products, setProducts] = useState<Perfume[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts(mockPerfumes);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Danh sách nước hoa</h2>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((item) => (
          <li key={item.id} className="border rounded-lg p-3 shadow-sm">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <div className="mt-2">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.brand} - {item.gender}</p>
              <p className="text-red-500 font-semibold mt-1">{item.price.toLocaleString()} ₫</p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

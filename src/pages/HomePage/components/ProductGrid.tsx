import type { FC } from "react";

interface Product {
  id: number;
  img: string;
  alt: string;
  name: string;
  stock: string;
  price: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
}

const ProductGrid: FC<ProductGridProps> = ({ products, title }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-black text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(({ id, img, alt, name, stock, price }) => (
          <div key={id} className="group">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={img}
                width={300}
                height={300}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-black text-sm">{name}</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-black">{stock}</div>
              <div className="font-medium text-gray-500">${price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;

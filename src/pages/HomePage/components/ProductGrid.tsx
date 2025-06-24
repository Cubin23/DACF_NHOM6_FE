// ProductGrid.tsx
import type { FC } from "react";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  status: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
}

const ProductGrid: FC<ProductGridProps> = ({ products, title }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-black text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(({ _id, image, name, price, status }) => (
          <div key={_id} className="group">
            <Link to={`/product/${_id}`} className="block">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={typeof image === 'string' ? image : image.src}
                width={300}
                height={300}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </Link>
            <h3 className="font-medium text-black text-sm">{name}</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-black">{status || "Còn hàng"}</div>
              <div className="font-medium text-gray-500">
                {typeof price === "number" ? price.toLocaleString() + "₫" : "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
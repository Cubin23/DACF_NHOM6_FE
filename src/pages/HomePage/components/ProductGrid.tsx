import type { FC } from "react";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
}

const ProductGrid: FC<ProductGridProps> = ({ products, title }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-black text-center">{title}</h2>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 text-sm">Không có sản phẩm để hiển thị.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p._id) // Đảm bảo mỗi sản phẩm có _id
            .map(({ _id, image, name, category, brand }) => (
              <div key={_id} className="group">
                <Link to={`/product/${_id}`} className="block">
                  <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/no-image.jpg";
                      }}
                    />
                  </div>
                </Link>
                <h3 className="font-medium text-black text-sm">{name}</h3>
                <div className="flex items-center justify-between mt-2 text-xs text-black">
                  <div>{brand}</div>
                  <div className="text-gray-500">{category}</div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  </section>
);

export default ProductGrid;

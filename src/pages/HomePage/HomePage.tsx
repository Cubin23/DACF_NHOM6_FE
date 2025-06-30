import { useEffect, useState } from "react";
import axios from "axios";
import type { FC } from "react";

import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import BrowseCategories from "./components/BrowseCategories";
import Newsletter from "./components/Newsletter";

interface Product {
  _id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
}

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8888/products");
        const rawProducts = Array.isArray(res.data?.data?.data)
          ? res.data.data.data
          : [];

        const mapped = rawProducts
          .filter((item: any) => item._id) // Chỉ lấy sản phẩm có _id
          .map((item: any) => ({
            _id: item._id || "",
            name: item.name || "Không tên",
            image: item.image || "/no-image.jpg",
            category: item.category_id?.name || "Không rõ danh mục",
            brand: item.brand_id?.name || "Không rõ thương hiệu",
          }));

        setProducts(mapped);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const bestSellers = products.slice(0, 4);
  const featured = products.slice(4, 8);

  return (
    <div>
      <HeroSection />
      <Features />
      <ProductGrid products={bestSellers} title="Sản phẩm bán chạy" />
      <BrowseCategories />
      <ProductGrid products={featured} title="Sản phẩm nổi bật" />
      <Newsletter />
    </div>
  );
};

export default HomePage;

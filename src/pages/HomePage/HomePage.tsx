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
  status: string;
}

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8888/products");

        const raw = res.data;
        const items = raw?.data?.data;

        if (Array.isArray(items)) {
          const mapped = items.map((item: any) => {
            return {
              _id: item._id,
              name: item.product?.name || item.name || "Không tên",
              image: item.product?.image || item.image || "",
              category: item.product?.category_id?.name || item.category_id?.name || "Chưa rõ",
              status: item.product?.status || item.status || "Còn hàng",
            };
          });
          setProducts(mapped);
        } else {
          console.warn("❌ Dữ liệu không phải mảng:", raw);
          setProducts([]);
        }
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
      <ProductGrid products={bestSellers} title="Sản phẩm bán chạy" showCategory />
      <BrowseCategories />
      <ProductGrid products={featured} title="Sản phẩm nổi bật" showCategory />
      <Newsletter />
    </div>
  );
};

export default HomePage;

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
  price: number;
  status: string;
}

const HomePage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8888/productVariant");
        const data = res.data;

        if (Array.isArray(data)) {
          const mapped = data.map((item: any) => {
            const price = parseFloat(item.price?.$numberDecimal || "0");
            return {
              _id: item._id,
              name: item.product?.name || "Không tên",
              image: item.product?.image || "", // <-- lấy từ `$lookup`
              price,
              status: item.product?.status || "Còn hàng",
            };
          });
          setProducts(mapped);
        } else {
          console.warn("Dữ liệu không phải mảng:", data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const bestSellers = products.slice(0, 4); // 4 sản phẩm đầu
  const featured = products.slice(4, 8);    // 4 sản phẩm tiếp theo

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

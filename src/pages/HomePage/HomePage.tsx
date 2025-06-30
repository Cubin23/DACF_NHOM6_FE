import type { FC } from "react";

import SP1 from "../../assets/pic/1.png";
import SP2 from "../../assets/pic/2.png";
import SP3 from "../../assets/pic/3.png";
import SP4 from "../../assets/pic/4.png";

import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import BrowseCategories from "./components/BrowseCategories";
import Newsletter from "./components/Newsletter";

const bestSellingProducts = [
  {
    id: 1,
    img: SP1,
    alt: "Classic Monochrome Tees",
    name: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "35.00",
  },
  {
    id: 2,
    img: SP2,
    alt: "Monochromatic Wardrobe",
    name: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "35.00",
  },
  {
    id: 3,
    img: SP3,
    alt: "Essential Neutrals",
    name: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "35.00",
  },
  {
    id: 4,
    img: SP4,
    alt: "ULTRANET Black",
    name: "Classic Monochrome Tees",
    stock: "IN STOCK",
    price: "35.00",
  },
];

const featuredProducts = bestSellingProducts;

const HomePage: FC = () => (
  <div>
    <HeroSection />
    <Features />
    <ProductGrid products={bestSellingProducts} title="Best Selling" />
    <BrowseCategories />
    <ProductGrid products={featuredProducts} title="Featured" />
    <Newsletter />
  </div>
);

export default HomePage;

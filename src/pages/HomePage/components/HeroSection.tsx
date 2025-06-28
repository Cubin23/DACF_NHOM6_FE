import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BN1 from "../../../assets/pic/bn1.png";

const HeroSection: FC = () => (
  <section className="py-12 md:py-16 bg-gray-200">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl text-gray-600 font-bold mb-4">
          Fresh Arrivals Online
        </h1>
        <p className="text-black mb-6">Discover Our Newest Collection Today.</p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors"
        >
          View Collection
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-full"></div>
          <img
            src={BN1}
            width={300}
            height={400}
            alt="Model wearing our latest collection"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

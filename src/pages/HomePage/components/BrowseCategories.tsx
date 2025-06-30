import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CL1 from "../../../assets/pic/CL1.png";

const BrowseCategories: FC = () => (
  <section className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl text-gray-600 font-bold mb-4">
            Browse Our Fashion Paradise!
          </h2>
          <p className="text-black mb-6">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-gray-900 hover:text-white text-white font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Start Browsing
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={CL1}
            height={400}
            width={300}
            alt="Fashion category showcase"
            className="max-w-full h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BrowseCategories;

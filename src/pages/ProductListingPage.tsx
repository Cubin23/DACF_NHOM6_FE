"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SP from "../pic/1.png";
import VolumeButton from "./SignUp/components/svg/CustomButton";



const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "Gender: Unisex",
    "Size: 100ml",
  ]);

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  function setSelectedVolume(volume: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">Products</span>
        <span className="font-medium">Search</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="border rounded-lg p-4 sticky top-4">
              <h2 className="font-medium mb-3 text-black">Filters Sidebar</h2>

            {/* Gender */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Gender</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="men"
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded"
                  />
                  <label htmlFor="men" className="ml-2 text-sm text-gray-600">
                    Men
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="women"
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded"
                  />
                  <label htmlFor="women" className="ml-2 text-sm text-gray-600">
                    Women
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="unisex"
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="unisex"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Unisex
                  </label>
                </div>
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                 <div className="flex space-x-2">
      {["100ml", "150ml", "200ml"].map((volume) => (
        <VolumeButton
          key={volume}
          label={volume}
          isSelected={setSelectedVolume === volume}
          onClick={() => setSelectedVolume(volume)}
        />
      ))}
    </div>
              </div>
            </div>

            {/* Type */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Type</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="text-gray-500 hover:text-black px-2 py-1 text-xs border border-gray-300 rounded">
                  Spray
                </button>
                <button className="text-gray-500 hover:text-black px-2 py-1 text-xs border border-gray-300 rounded">
                  Roll-on
                </button>
                <button className="text-gray-500 hover:text-black px-2 py-1 text-xs border border-gray-300 rounded">
                  Solid-perfume
                </button>
                <button className="text-gray-500 hover:text-black px-2 py-1 text-xs border border-gray-300 rounded">
                  Oil
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          {/* Applied Filters */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Applied Filters:</div>
            <div className="flex flex-wrap gap-2 text-black">
              {selectedFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="ml-1 text-gray-500 hover:text-gray-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Results Count & Sort */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              Showing 1-9 Of 10 Results.
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">SORT BY</span>
              <select className="text-sm border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 1 */}
            <Link to="/product/1" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Classic Monochrome Tees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$35.00</div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link to="/product/2" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Monochromatic Wardrobe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Monochromatic Wardrobe</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$27.00</div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link to="/product/3" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Essential Neutrals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Essential Neutrals</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$22.00</div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link to="/product/4" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="ULTRANET Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">ULTRANET Black</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$43.00</div>
              </div>
            </Link>

            {/* Product 5 */}
            <Link to="/product/5" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Elegant Ebony Sweatshirts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Elegant Ebony Sweatshirts</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$35.00</div>
              </div>
            </Link>

            {/* Product 6 */}
            <Link to="/product/6" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Sleek and Cozy Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Sleek and Cozy Black</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$57.00</div>
              </div>
            </Link>

            {/* Product 7 */}
            <Link to="/product/7" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Raw Black Tees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Raw Black Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$19.00</div>
              </div>
            </Link>

            {/* Product 8 */}
            <Link to="/product/8" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="MOCKUP Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">MOCKUP Black</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$30.00</div>
              </div>
            </Link>

            {/* Product 9 */}
            <Link to="/product/9" className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP}
                  width={"300px"}
                  height={"300px"}
                  alt="Athletic Shirt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Athletic Shirt</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500">IN STOCK</div>
                <div className="font-medium">$35.00</div>
              </div>
            </Link>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center">
              <button className="p-2 border rounded-l-md hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button className="px-4 py-2 border-t border-b bg-gray-600 text-white">
                1
              </button>
              <button className="px-4 py-2 border-t border-b text-gray-300 hover:bg-gray-50 hover:text-black">
                2
              </button>
              <button className="p-2 border rounded-r-md hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;

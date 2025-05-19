"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Minus, Plus, Share2 } from "lucide-react";
import SP1 from "../pic/4.png";
import SP2 from "../pic/1.png";
import SP3 from "../pic/2.png";
import SP4 from "../pic/3.png";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedSize, setSelectedSize] = useState("100ml");

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/products" className="text-gray-500 hover:text-gray-900">
          Products
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">PerFume 1</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="bg-gray-100 rounded-lg mb-4 aspect-square flex items-center justify-center">
            <img
              src={SP1}
              width={"500px"}
              height={"500px"}
              alt="Raw Black T-Shirt Lineup"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex gap-2">
            <button className="w-2 h-2 rounded-full bg-gray-900"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold mb-2 text-gray-500">
              Raw Black T-Shirt Lineup
            </h1>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Reviews */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">4.5 — 54 Reviews</span>
            <span className="ml-4 text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
              IN STOCK
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold mb-6 text-red-500">$75.00</div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-gray-700">
              SIZE
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {["10ml", "30ml", "50ml", "100ml"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-2 py-1 border rounded ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "text-gray-500 border-gray-300 hover:border-gray-900 hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2 text-gray-500">QUANTITY</h3>
            <div className="flex">
              <button
                onClick={decreaseQuantity}
                className="w-15 h-15 border text-gray-600 border-gray-300 flex items-center justify-center rounded-l"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-14 h-10 border-t border-b text-black border-gray-300 flex items-center justify-center">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-15 h-15 border text-gray-600 border-gray-300 flex items-center justify-center rounded-r"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors">
              Add to cart
            </button>
            <button className="w-15 h-15 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Heart className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Free Shipping */}
          <div className="text-sm text-gray-500 mb-8">
            — FREE SHIPPING ON ORDERS $100+
          </div>

          {/* Product Details Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-4 text-sm text-black font-medium ${
                  activeTab === "details"
                    ? "border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
              >
                Detail
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 text-sm text-black font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "details" && (
              <div className="text-gray-600 text-sm leading-relaxed">
                <p className="mb-4">
                  Elevate your everyday style with our Men's Black T-Shirts, the
                  ultimate wardrobe essential for modern men. Crafted with
                  meticulous attention to detail and designed for comfort, these
                  versatile black tees are a must-have addition to your
                  collection.
                </p>
                <p className="mb-4">
                  The classic black color never goes out of style. Whether
                  you're dressing up for a special occasion or keeping it
                  casual, these black t-shirts are the perfect choice,
                  effortlessly complementing any outfit.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Premium Quality</li>
                  <li>Versatile Wardrobe Staple</li>
                  <li>Available in Various Sizes</li>
                  <li>Tailored Fit</li>
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">
                    Based on 54 reviews
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">John Doe</div>
                      <div className="text-gray-500 text-sm">2 days ago</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Perfect fit and very comfortable. The material is high
                      quality and the color hasn't faded after multiple washes.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-gray-500 text-sm">1 week ago</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Good quality shirt but runs a bit small. I would recommend
                      sizing up if you prefer a looser fit. Overall, I'm
                      satisfied with my purchase.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="text-sm text-gray-500 uppercase mb-6">
          SIMILAR PRODUCTS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="group">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={SP1}
                width={"300px"}
                height={"300px"}
                alt="Classic Monochrome Tees"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-500">
              Classic Monochrome Tees
            </h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">IN STOCK</div>
              <div className="font-medium text-gray-500">$35.00</div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={SP2}
                width={"300px"}
                height={"300px"}
                alt="Monochromatic Wardrobe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-500">
              Monochromatic Wardrobe
            </h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">IN STOCK</div>
              <div className="font-medium text-gray-500">$27.00</div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={SP3}
                width={"300px"}
                height={"300px"}
                alt="Essential Neutrals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-500">Essential Neutrals</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">IN STOCK</div>
              <div className="font-medium text-gray-500">$22.00</div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group">
            <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={SP4}
                width={"300px"}
                height={"300px"}
                alt="ULTRANET Black"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-500">ULTRANET Black</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-gray-500">IN STOCK</div>
              <div className="font-medium text-gray-500">$43.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

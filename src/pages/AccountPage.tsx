"use client";

import type React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Heart, MapPin, Key, User, LogOut } from "lucide-react";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    fullName: "Hung Bui",
    email: "hugn7125@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", userData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">My Account</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">My Account</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="space-y-1">
            <Link
              to="/account/orders"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Package className="w-5 h-5 mr-3" />
              Orders
            </Link>
            <Link
              to="/account/wishlist"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Heart className="w-5 h-5 mr-3" />
              Wishlist
            </Link>
            <Link
              to="/account/address"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Address
            </Link>
            <Link
              to="/account/password"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Key className="w-5 h-5 mr-3" />
              Password
            </Link>
            <Link
              to="/account"
              className="flex items-center px-4 py-3 text-gray-900 bg-gray-100 rounded-md"
            >
              <User className="w-5 h-5 mr-3" />
              Account Detail
            </Link>
            <Link
              to="/logout"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Link>
          </div>
        </div>

        {/* Account Details */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg">
            <div className="flex space-x-32">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold text-xl">
                  HB
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={userData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

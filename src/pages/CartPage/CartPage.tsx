import { useState } from "react";
import { Link } from "react-router-dom";
import SP from "../../assets/pic/4.png";

import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Raw Black T-Shirt Lineup",
      price: 75.0,
      quantity: 11,
      size: "30ml",
      image: { src: SP, width: 100, height: 100 },
    },
    {
      id: 2,
      name: "Essential Neutrals",
      price: 22.0,
      quantity: 5,
      size: "100ml",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = 3.0;
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Cart</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4 text-black">Your cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link
                to="/products"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onUpdateQuantity={updateQuantity}
              />
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <OrderSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

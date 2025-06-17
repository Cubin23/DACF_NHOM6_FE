"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, X } from "lucide-react"
import SP from '../pic/4.png'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Raw Black T-Shirt Lineup",
      price: 75.0,
      quantity: 2,
      size: "30ml",
      image: SP,
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = 3.0
  const total = subtotal + tax

  const handleCheckout = async () => {
    try {
      const payload = {
        user_id: "64b8f3a23c6f5a8d12345678",
        customer_info: {
          username: "Nguyen Van A",
          phone_number: "0123456789",
          email: "a@example.com"
        },
        receiver_info: {
          username: "Nguyen Van B",
          phone_number: "0987654321",
          email: "b@example.com"
        },
        shipping_address: {
          detail_address: "123 Đường ABC",
          province: "Hà Nội",
          district: "Ba Đình",
          ward: "Phúc Xá"
        },
        total_amount: total,
        status: "pending",
        is_paid: false,
        payment_status: "pending",
        payment_method: "COD",
        transaction_id: "",
        shipping_fee: 0,
        description: "Giao hàng trong ngày",
        tracking_number: "",
        user_note: "Giao giờ hành chính",
        cart_items: cartItems
      }

      const response = await fetch("http://localhost:8888/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error("Failed to place order")
      }

      const result = await response.json()
      alert("Đặt hàng thành công!")
      console.log("Order result:", result)

      setCartItems([]) // clear cart
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Có lỗi xảy ra khi đặt hàng.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Ecommerce</Link>
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
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b py-4">
                  <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
                    <img src={SP} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-black">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      <span className="ml-4">Size: {item.size}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-15 h-15 text-black border border-gray-300 flex items-center justify-center rounded-l"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <div className="w-10 h-8 border-t text-black border-b border-gray-300 flex items-center justify-center text-sm">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-15 h-15 border text-black border-gray-300 flex items-center justify-center rounded-r"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="font-medium">${item.price.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-black">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-black">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="text-black">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span className="text-black">Total</span>
                <span className="text-black">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full block text-center px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
            >
              Checkout
            </button>

            <Link
              to="/products"
              className="w-full block text-center px-6 py-3 text-gray-600 font-medium mt-2 hover:text-gray-900"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

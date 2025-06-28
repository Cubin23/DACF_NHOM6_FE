import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";

interface CartProduct {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(saved);
  }, []);

  const updateQuantity = (id: string, size: string, newQty: number) => {
    if (newQty < 1) return;
    const updated = cartItems.map((item) =>
      item._id === id && item.size === size
        ? { ...item, quantity: newQty }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id: string, size: string) => {
    const updated = cartItems.filter(
      (item) => !(item._id === id && item.size === size)
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleClickDetail = (id: string) => {
    navigate(`/products/${id}`);
  };

  const handleCheckout = (product: CartProduct) => {
    localStorage.setItem("checkoutItems", JSON.stringify([product]));
    navigate("/checkout");
  };

  const handleCheckoutAll = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng trống.");
      return;
    }
    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
    navigate("/checkout");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Cart</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Giỏ hàng trống</p>
              <Link
                to="/products"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={`${item._id}-${item.size}`}
                  className="flex border-b py-4"
                >
                  <div
                    className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 cursor-pointer"
                    onClick={() => handleClickDetail(item._id)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3
                        className="font-medium text-black cursor-pointer"
                        onClick={() => handleClickDetail(item._id)}
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item._id, item.size)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      Size: {item.size}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded-l"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <div className="w-10 h-8 border-t text-black border-b border-gray-300 flex items-center justify-center text-sm">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded-r"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="font-medium">
                        {(item.price * item.quantity).toLocaleString()}₫
                      </div>
                    </div>
                    <button
                      onClick={() => handleCheckout(item)}
                      className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6 text-right">
                <button
                  onClick={handleCheckoutAll}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                >
                  Thanh toán tất cả
                </button>
              </div>
            </>
          )}
        </div>

        <div className="lg:w-1/3 border rounded p-6">
          <h2 className="text-lg font-semibold mb-4 text-black">
            Tóm tắt đơn hàng
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tạm tính:</span>
              <span className="text-gray-600">{subtotal.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Thuế (5%):</span>
              <span className="text-gray-600">{tax.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-2 border-t mt-2">
              <span className="text-black">Tổng cộng:</span>
              <span className="text-black">{total.toLocaleString()}₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

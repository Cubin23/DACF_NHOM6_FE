// CheckoutPage.tsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface CartProduct {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    note: ""
  });

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("checkoutItems") || "[]");
    setCartItems(storedItems);

    const sub = storedItems.reduce((sum: number, item: CartProduct) => sum + item.price * item.quantity, 0);
    const calculatedTax = Math.round(sub * 0.05);
    setSubtotal(sub);
    setTax(calculatedTax);
    setTotal(sub + calculatedTax);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      user_id: "6445a8b123456789abcdef05", // replace with actual user id
      customer_info: {
        username: formData.fullName,
        phone_number: formData.phone,
        email: formData.email,
      },
      receiver_info: {
        username: formData.fullName,
        phone_number: formData.phone,
        email: formData.email,
      },
      shipping_address: {
        detail_address: formData.address,
        province: formData.province,
        district: formData.district,
        ward: formData.ward,
      },
      total_amount: total,
      shipping_fee: 0,
      payment_method: "cash",
      user_note: formData.note,
      products: cartItems.map(item => ({
        product_id: item._id,
        name: item.name,
        image: item.image,
        size: item.size,
        price: item.price,
        quantity: item.quantity
      }))
    };

    try {
      const res = await axios.post("http://localhost:8888/orders", orderData);
      alert("Đặt hàng thành công!");
      localStorage.removeItem("checkoutItems");
      navigate("/payment-success");
    } catch (error) {
      console.error("Lỗi đặt hàng:", error);
      alert("Không thể đặt hàng.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Ecommerce</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Checkout</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        {/* Thông tin giao hàng */}
        <div className="lg:w-2/3 space-y-4">
          <input name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded" required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border rounded" required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded" required />
          <input name="address" placeholder="Detail Address" onChange={handleChange} className="w-full p-3 border rounded" required />
          <textarea name="note" placeholder="Ghi chú" onChange={handleChange} className="w-full p-3 border rounded"></textarea>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="lg:w-1/3 border rounded p-6 space-y-4">
          <h2 className="text-lg font-semibold">Your Order</h2>
          {cartItems.map(item => (
            <div key={item._id} className="flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
              </div>
              <p className="text-sm">{(item.price * item.quantity).toLocaleString()}₫</p>
            </div>
          ))}

          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span><span>{subtotal.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span><span>{tax.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span><span>{total.toLocaleString()}₫</span>
            </div>
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded mt-4">Đặt hàng</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "vnpay">("cash");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    note: "",
  });

  // Handle VNPAY callback query parameters
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const responseCode = query.get("responseCode");
    const orderId = query.get("orderId");

    if (responseCode && orderId) {
      if (responseCode === "00") {
        alert("Thanh toán VNPAY thành công! Mã đơn hàng: " + orderId);
        localStorage.removeItem("checkoutItems");
        navigate("/payment-success");
      } else {
        alert("Thanh toán VNPAY thất bại. Mã lỗi: " + responseCode);
        navigate("/payment-failed");
      }
    }
  }, [location, navigate]);

  // Load cart items and calculate totals
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
    setError(null); // Clear error on input change
  };

  const handlePaymentMethodChange = (method: "cash" | "vnpay") => {
    setPaymentMethod(method);
    setError(null);
  };

  const validateForm = () => {
    const { fullName, phone, email, address, province, district, ward } = formData;
    if (!fullName || !phone || !email || !address || !province || !district || !ward) {
      setError("Vui lòng điền đầy đủ thông tin giao hàng.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email không hợp lệ.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Số điện thoại phải có 10 chữ số.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    const orderData = {
      user_id: "6445a8b123456789abcdef05", // Replace with actual user ID (e.g., from auth context)
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
      payment_method: paymentMethod,
      user_note: formData.note,
      products: cartItems.map((item) => ({
        product_id: item._id,
        name: item.name,
        image: item.image,
        size: item.size,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    try {
      if (paymentMethod === "cash") {
        // Cash on delivery: Submit order directly
        const res = await axios.post("http://localhost:3000/orders", orderData);
        alert("Đặt hàng thành công!");
        localStorage.removeItem("checkoutItems");
        navigate("/cod/result");
      } else if (paymentMethod === "vnpay") {
        // VNPAY: Create payment URL
        const vnpayData = {
          amount: total, // Send total amount in VND
          bankCode: "NCB", // Optional: Can be dynamic via a dropdown
          orderInfo: `Thanh toan don hang ${orderData.user_id}`,
          orderType: "other",
          locale: "vn",
        };

        const res = await axios.post("http://localhost:3000/vnpay/create-payment", vnpayData);
        if (res.data.paymentUrl) {
          // Save order to database with pending status
          await axios.post("http://localhost:3000/orders", { ...orderData, status: "pending" });
          // Redirect to VNPAY payment URL
          window.location.href = res.data.paymentUrl;
        } else {
          throw new Error("Không thể tạo URL thanh toán VNPAY.");
        }
      }
    } catch (error) {
      console.error("Lỗi đặt hàng:", error);
      setError("Không thể đặt hàng. Vui lòng thử lại.");
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

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        {/* Thông tin giao hàng */}
        <div className="lg:w-2/3 space-y-4">
          <h2 className="text-lg font-semibold">Thông tin giao hàng</h2>
          <input
            name="fullName"
            value={formData.fullName}
            placeholder="Họ và tên"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            placeholder="Số điện thoại"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="address"
            value={formData.address}
            placeholder="Địa chỉ chi tiết"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="province"
            value={formData.province}
            placeholder="Tỉnh/Thành phố"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="district"
            value={formData.district}
            placeholder="Quận/Huyện"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            name="ward"
            value={formData.ward}
            placeholder="Phường/Xã"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="note"
            value={formData.note}
            placeholder="Ghi chú (tùy chọn)"
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Payment method selection */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold">Phương thức thanh toán</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => handlePaymentMethodChange("cash")}
                  className="form-radio text-black"
                />
                <span>Thanh toán khi nhận hàng</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="vnpay"
                  checked={paymentMethod === "vnpay"}
                  onChange={() => handlePaymentMethodChange("vnpay")}
                  className="form-radio text-black"
                />
                <span>Thanh toán qua VNPAY</span>
              </label>
            </div>
          </div>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="lg:w-1/3 border rounded p-6 space-y-4">
          <h2 className="text-lg font-semibold">Tóm tắt đơn hàng</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Giỏ hàng trống</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">Kích thước: {item.size} | Số lượng: {item.quantity}</p>
                </div>
                <p className="text-sm">{(item.price * item.quantity).toLocaleString()}₫</p>
              </div>
            ))
          )}

          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span>Tạm tính</span>
              <span>{subtotal.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Thuế</span>
              <span>{tax.toLocaleString()}₫</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Tổng cộng</span>
              <span>{total.toLocaleString()}₫</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 transition"
            disabled={cartItems.length === 0}
          >
            {paymentMethod === "cash" ? "Đặt hàng" : "Thanh toán qua VNPAY"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
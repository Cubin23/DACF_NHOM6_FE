import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccessPage = () => {
  const [params] = useSearchParams();

  useEffect(() => {
    const responseCode = params.get("vnp_ResponseCode");
    if (responseCode === "00") {
      alert("✅ Thanh toán thành công!");
      localStorage.removeItem("cart");
    } else {
      alert("❌ Thanh toán thất bại hoặc bị hủy.");
    }
  }, [params]);

  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold text-black mb-4">Cảm ơn bạn!</h1>
      <p className="text-gray-700">Kết quả thanh toán của bạn đã được xử lý.</p>
    </div>
  );
};

export default PaymentSuccessPage;

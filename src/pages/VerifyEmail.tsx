import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export  default function VerifyEmail()  {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as { email: string })?.email || "";

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    if (!code) {
      setMessage("Vui lòng nhập mã xác minh");
      return;
    }
    try {
      await axios.post("http://localhost:8888/auth/verify-email", { email, code });
      setMessage("Xác minh thành công! Bạn có thể đăng nhập.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Mã xác minh không đúng hoặc đã hết hạn.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Xác minh email của bạn</h2>
      <p className="mb-4">Mã xác minh đã được gửi đến email: <b>{email}</b></p>
      <input
        type="text"
        placeholder="Nhập mã xác minh"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleVerify}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Xác minh
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};
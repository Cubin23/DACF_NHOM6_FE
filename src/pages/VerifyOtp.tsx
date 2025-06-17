import React, { useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const VerifyOtp: React.FC = () => {
  const query = useQuery()
  const email = query.get("email")
  const [otp, setOtp] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  if (!email) {
    return <p>Thiếu email, vui lòng quay lại trang quên mật khẩu.</p>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // Gọi API verify OTP
      await axios.post("http://localhost:8888/auth/verify-otp", { email, otp })
      setLoading(false)
      // Nếu thành công, chuyển sang đổi mật khẩu
      navigate(`/forgot-password/reset?email=${encodeURIComponent(email)}`)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message)
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Nhập mã xác nhận</h2>
      <p>Mã đã gửi về email: <b>{email}</b></p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Mã OTP</label>
        <input
          type="text"
          required
          className="border p-2 w-full mb-4"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          placeholder="Nhập mã OTP"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Đang xác nhận..." : "Xác nhận"}
        </button>
      </form>
    </div>
  )
}

export default VerifyOtp

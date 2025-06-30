import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Forgotpassword: React.FC = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // Gọi API gửi mail lấy OTP
      await axios.post("http://localhost:8888/auth/forgot-password", { email })
      setLoading(false)
      // Chuyển sang trang nhập OTP, truyền email qua query param
      navigate(`/forgot-password/verify-otp?email=${encodeURIComponent(email)}`)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message)
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Quên mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nhập email của bạn</label>
        <input
          type="email"
          required
          className="border p-2 w-full mb-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Đang gửi..." : "Gửi mã xác nhận"}
        </button>
      </form>
    </div>
  )
}

export default Forgotpassword

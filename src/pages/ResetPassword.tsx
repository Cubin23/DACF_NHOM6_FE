import React, { useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ResetPassword: React.FC = () => {
  const query = useQuery()
  const email = query.get("email")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  if (!email) {
    return <p>Thiếu email, vui lòng quay lại trang quên mật khẩu.</p>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự")
      return
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp")
      return
    }

    setLoading(true)
    try {
      // Gọi API reset mật khẩu
    // Đoạn này bạn có rồi, dùng nguyên nhé
await axios.post("http://localhost:8888/auth/reset-password", { email, password })

      setLoading(false)
      alert("Đổi mật khẩu thành công! Vui lòng đăng nhập lại.")
      navigate("/login")
    } catch (err: any) {
      setError(err.response?.data?.message || err.message)
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Đổi mật khẩu mới</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Mật khẩu mới</label>
        <input
          type="password"
          required
          className="border p-2 w-full mb-4"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Mật khẩu mới"
        />
        <label className="block mb-2">Xác nhận mật khẩu</label>
        <input
          type="password"
          required
          className="border p-2 w-full mb-4"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Xác nhận mật khẩu"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Đang đổi mật khẩu..." : "Đổi mật khẩu"}
        </button>
      </form>
    </div>
  )
}

export default ResetPassword

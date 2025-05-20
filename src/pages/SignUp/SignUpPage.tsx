import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import MyCustomIcon from "./components/svg/MyCustomIcon";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await axios.post("http://localhost:8888/auth/register", formData)
      console.log("đăng kí thành công", res.data);
      navigate("/login")
    } catch (err) {
      console.error(err);
      setError(err.res?.data?.message || "đăng kí thất bại")
      
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">Sign up</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">Sign up</h1>

      <div className="max-w-md mx-auto">
        {/* Google Sign Up */}
        <button className=" text-black w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 px-4 mb-4 hover:bg-gray-50 transition-colors">
          <MyCustomIcon/>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                 onChange={handleChange}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                 onChange={handleChange}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
            </div>

            <div className="text-sm text-gray-600 mt-2">
              By Creating An Account You Agree With Our Terms Of Service, Privacy Policy.
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage

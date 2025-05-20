/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { UserRegister } from "../../interface/type";
import MyCustomIcon from "./components/svg/MyCustomIcon";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserRegister>();

  const navigate = useNavigate();

  const onSubmit = async (user: UserRegister) => {
    try {
      await axios.post("http://localhost:8888/auth/register", user);
      message.success("🎉 Đăng ký thành công!");
      navigate("/login");
    } catch (error: any) {
      message.error(error.response?.data?.message?.[0] || "❌ Đăng ký thất bại!");
    }
  };
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
          <MyCustomIcon />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type your name..."
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                {...register("name", {
                  required: "Không được để trống",
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                placeholder="Type your email..."
                {...register("email", {
                  required: "Không được để trống",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Email không đúng định dạng",
                  },
                })}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Type your password..."
                {...register("password", {
                  required: "Không được để trống",
                })}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="string"
                id="phone"
                placeholder="Type your phone number..."
                {...register("phone", {
                  required: "Không được để trống",
                })}
                className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="text-sm text-gray-600 mt-2">
              By Creating An Account You Agree With Our Terms Of Service, Privacy Policy.
            </div>

            <button
              type="submit"
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
function useForm<T>(): { register: any; handleSubmit: any; formState: { errors: any; }; } {
  throw new Error("Function not implemented.");
}


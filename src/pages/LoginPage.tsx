
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import type { UserLogin } from "../interface/type";
import { useForm } from "react-hook-form";
import { message } from "antd";



const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  const navigate = useNavigate();

  const onSubmit = async (user: UserLogin) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8888/auth/login",
        user
      );
      message.success("🎉 Đăng nhập thành công!");

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error: any) {
      message.error(error.response?.data?.message || "❌ Đăng nhập thất bại!");
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
        <span className="font-medium text-black">Login</span>
      </div>

      <h1 className="text-2xl text-black font-bold mb-8">Login</h1>

      <div className="max-w-md mx-auto">
        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border text-black border-gray-300 rounded-md py-3 px-4 mb-4 hover:bg-gray-50 transition-colors">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
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

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


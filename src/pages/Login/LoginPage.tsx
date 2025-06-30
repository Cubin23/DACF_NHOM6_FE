/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { message } from "antd";
import type { UserLogin } from "../../interface/type";
import CustomButton from "./components/CustomButton";
import GoogleLoginButton from "./components/GoogleLoginButton";
import InputField from "./components/InputField";

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

      // ✅ Lưu token đúng key để các trang như AccountPage dùng được
      localStorage.setItem("accessToken", data.token);

      navigate("/");
    } catch (error: any) {
      message.error(error.response?.data?.message || "❌ Đăng nhập thất bại!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Ecommerce</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-black">Login</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Đăng nhập</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <GoogleLoginButton />

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Email"
            id="email"
            type="email"
            register={register("email", {
              required: "Không được để trống",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email không đúng định dạng",
              },
            })}
            error={errors.email}
            required
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            register={register("password", {
              required: "Không được để trống",
            })}
            error={errors.password}
            required
          />

          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-gray-600 hover:text-gray-900"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <CustomButton type="submit">Đăng nhập</CustomButton>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

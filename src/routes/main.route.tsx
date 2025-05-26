import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import AccountPage from "../pages/AccountPage"

import SignUpPage from "../pages/SignUp/SignUpPage"
import LoginPage from "../pages/LoginPage"
import VerifyEmail from "../pages/VerifyEmail"
import Forgotpassword from "../pages/Forgot-password"
import VerifyOtp from "../pages/VerifyOtp"       // bạn tạo file này
import ResetPassword from "../pages/ResetPassword" // bạn tạo file này

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductListingPage /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <SignUpPage /> },
      { path: "verify-email", element: <VerifyEmail /> },
      { path: "forgot-password", element: <Forgotpassword /> },
      { path: "forgot-password/verify-otp", element: <VerifyOtp /> },
      { path: "forgot-password/reset", element: <ResetPassword /> },
    ],
  },
])

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
import Dashboard from "../pages/Admin/Dashboard"
import AdminLayout from "../components/layouts/AdminLayout"
import Product from "../pages/Admin/Product"
import Orders from "../pages/Admin/Orders"
import Customers from "../pages/Admin/Customers"
import Reviews from "../pages/Admin/Reviews"
import Setting from "../pages/Admin/Setting"
import VerifyEmail from "../pages/VerifyEmail"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // KHÔNG cần truyền children
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
      
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Product /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
      { path: "reviews", element: <Reviews /> },
      { path: "settings", element: <Setting /> },
    ],
  }
])

import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUp/SignUpPage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import AccountPage from "../pages/AccountPage"

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
  ],
}

])

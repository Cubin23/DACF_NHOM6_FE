import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import HomePage from "../pages/HomePage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import AccountPage from "../pages/AccountPage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <MainLayout>
        <ProductListingPage />
      </MainLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <MainLayout>
        <ProductDetailPage />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <CartPage />
      </MainLayout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <MainLayout>
        <CheckoutPage />
      </MainLayout>
    ),
  },
  {
    path: "/account",
    element: (
      <MainLayout>
        <AccountPage />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <MainLayout>
        <SignUpPage />
      </MainLayout>
    ),
  },
])

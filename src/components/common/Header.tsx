import { ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/pic/th-removebg-preview - Copy.png"
const Header = () => {
  return (
    
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} width={50} height={50} alt="Logo" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Home</Link>
            <Link to="/products" className="text-sm text-gray-500 hover:text-gray-700">Categories</Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-gray-700">About</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-700">Contact</Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products"
                className="w-full py-2 pl-10 pr-4 text-sm text-black bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cart + Account */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 text-gray-500 hover:text-gray-700">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/account" className="p-2 text-gray-500 hover:text-gray-700">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>
  )
}

export default Header
import { Link } from "react-router-dom"
import { ArrowRight, Package, Shield, CreditCard } from "lucide-react"
import SP1 from '../pic/1.png'
import SP2 from '../pic/2.png'
import SP3 from '../pic/3.png'
import SP4 from '../pic/4.png'
import BN1 from '../pic/bn1.png'
import CL1 from '../pic/CL1.png'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl text-gray-600 font-bold mb-4">Fresh Arrivals Online</h1>
            <p className="text-black mb-6">Discover Our Newest Collection Today.</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              View Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-full"></div>
              <img
                src={BN1} width={"300px"} height={"400px"}
                alt="Model wearing our latest collection"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Upgrade your style today and get FREE shipping on all orders! Don't miss out.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Shop confidently with our Satisfaction Guarantee. Love it or get a refund.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-black mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Your security is our priority. Your payments are secure with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-black text-center">Best Selling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP1} width={"300px"} height={"300px"}
                  alt="Classic Monochrome Tees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP2} width={"300px"} height={"300px"}
                  alt="Monochromatic Wardrobe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP3} width={"300px"} height={"300px"}
                  alt="Essential Neutrals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP4} width={"300px"} height={"300px"}
                  alt="ULTRANET Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl text-gray-600 font-bold mb-4">Browse Our Fashion Paradise!</h2>
              <p className="text-black mb-6">
                Step into a world of style and explore our diverse collection of clothing categories.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-gray-900 hover:text-white text-white font-medium rounded hover:bg-gray-800 transition-colors"
              >
                Start Browsing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={CL1} height={"400px"} width={"300px"}
                alt="Fashion category showcase"
                className="max-w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex border-b">
              <button className="px-4 py-2 text-sm font-medium border-b-2 text-black border-gray-900">Featured</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500">Latest</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP1} width={"300px"} height={"300px"}
                  alt="Elegant Ebony Sweatshirts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP2} width={"300px"} height={"300px"}
                  alt="Sleek and Cozy Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP3} width={"300px"} height={"300px"}
                  alt="Raw Black Tees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={SP4} width={"300px"} height={"300px"}
                  alt="MOCKUP Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-black text-sm">Classic Monochrome Tees</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-black ">IN STOCK</div>
                <div className="font-medium text-gray-500">$35.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-600">Join Our Newsletter</h2>
            <p className="text-black mb-6">We love to surprise our subscribers with occasional gifts.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
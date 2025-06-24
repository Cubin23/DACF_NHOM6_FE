import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
}

const OrderSummary = ({ subtotal, tax, total }: OrderSummaryProps) => (
  <div className="border rounded-lg p-6">
    <h2 className="text-lg font-semibold mb-4 text-black">Order Summary</h2>

    <div className="space-y-4 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-black">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Shipping:</span>
        <span className="text-black">Free</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Tax:</span>
        <span className="text-black">${tax.toFixed(2)}</span>
      </div>
      <div className="border-t pt-4 flex justify-between font-semibold">
        <span className="text-black">Total</span>
        <span className="text-black">${total.toFixed(2)}</span>
      </div>
    </div>

    <Link
      to="/checkout"
      className="w-full block text-center px-6 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
    >
      Checkout
    </Link>

    <Link
      to="/products"
      className="w-full block text-center px-6 py-3 text-gray-600 font-medium mt-2 hover:text-gray-900"
    >
      Continue Shopping
    </Link>
  </div>
);

export default OrderSummary;

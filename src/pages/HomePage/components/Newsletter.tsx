// Newsletter.tsx
import type { FC } from "react";

const Newsletter: FC = () => (
  <section className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-600">
          Join Our Newsletter
        </h2>
        <p className="text-black mb-6">
          We love to surprise our subscribers with occasional gifts.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-200 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;

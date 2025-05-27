import type { FC, ReactElement } from "react";
import { Package, Shield, CreditCard } from "lucide-react";

interface Feature {
  icon: ReactElement;
  title: string;
  desc: string;
}

const featuresData: Feature[] = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Free Shipping",
    desc: "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Satisfaction Guarantee",
    desc: "Shop confidently with our Satisfaction Guarantee. Love it or get a refund.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payment",
    desc: "Your security is our priority. Your payments are secure with us.",
  },
];

const Features: FC = () => (
  <section className="py-16 bg-gray-">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map(({ icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 text-black bg-gray-100 rounded-full flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="font-semibold text-black mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

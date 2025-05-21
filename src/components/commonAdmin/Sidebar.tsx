import { Link, useLocation } from "react-router-dom";

const icons = {
  dashboard: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 19h6v-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3v-6h18v6z" />
    </svg>
  ),
  products: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8 5-8-5v6l8 5 8-5V7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v8" />
    </svg>
  ),
  orders: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8M8 17h8" />
    </svg>
  ),
  customers: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 018 0v2" />
    </svg>
  ),
  reviews: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h10a2 2 0 012 2v10z" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
};

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { to: "/dashboard", label: "Dashboard", icon: icons.dashboard },
    { to: "/dashboard/products", label: "Products", icon: icons.products },
    { to: "/dashboard/orders", label: "Orders", icon: icons.orders },
    { to: "/dashboard/customers", label: "Customers", icon: icons.customers },
    { to: "/dashboard/reviews", label: "Reviews", icon: icons.reviews },
    { to: "/dashboard/settings", label: "Settings", icon: icons.settings },
  ];

  return (
    <aside className="w-60 h-screen bg-white fixed top-0 left-0 border-r shadow-md p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      <nav>
        <ul>
          {menuItems.map(({ to, label, icon }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center mb-3 p-2 rounded cursor-pointer ${
                    active
                      ? "bg-gray-900 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

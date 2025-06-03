import { useState } from "react";
import { Package, Heart, MapPin, Key, User, LogOut } from "lucide-react";

import SidebarLink from "./components/SidebarLink";
import Avatar from "./components/Avatar";
import InputField from "./components/InputField";
import CustomButton from "./components/CustomButton";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    name: "Bùi Quốc Hùng",
    email: "hugn7125@gmail.com",
    phone: "0867355800",
    address: "Phạm Văn Đồng",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", userData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">Settings</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">My Account</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        Account Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="space-y-2">
          <SidebarLink to="/account/orders" icon={<Package />} label="Orders" />
          <SidebarLink
            to="/account/wishlist"
            icon={<Heart />}
            label="Wishlist"
          />
          <SidebarLink
            to="/account/address"
            icon={<MapPin />}
            label="Address"
          />
          <SidebarLink to="/account/password" icon={<Key />} label="Password" />
          <SidebarLink
            to="/account"
            icon={<User />}
            label="Account Detail"
            exactActive
          />
          <SidebarLink to="/logout" icon={<LogOut />} label="Logout" />
        </aside>

        {/* Form content */}
        <section className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-6 mb-6">
            <Avatar initials="HB" />
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {userData.name}
              </p>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
            <InputField
              id="name"
              label="Full Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
            <InputField
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <InputField
              id="phone"
              label="Phone Number"
              type="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
            <InputField
              id="address"
              label="Address"
              type="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />

            <div className="pt-2">
              <CustomButton type="submit" variant="primary">
                Save Changes
              </CustomButton>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
import { useState } from "react";
import { Package, Heart, MapPin, Key, User, LogOut } from "lucide-react";

import SidebarLink from "./components/SidebarLink";
import Avatar from "./components/Avatar";
import InputField from "./components/InputField";
import CustomButton from "./components/CustomButton";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    fullName: "Hung Bui",
    email: "hugn7125@gmail.com",
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <a href="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </a>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">My Account</span>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-black">My Account</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-1">
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
        </div>

        <div className="md:w-3/4 bg-white rounded-lg p-6">
          <div className="flex space-x-32">
            <Avatar initials="HB" />

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 max-w-md">
                <InputField
                  id="fullName"
                  label="Full name"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />

                <div className="pt-4">
                  <CustomButton type="submit" variant="primary">
                    Save Changes
                  </CustomButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

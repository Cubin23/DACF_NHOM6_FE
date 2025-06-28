import { useEffect, useState } from "react";
import axios from "axios";
import { Package, Heart, MapPin, Key, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SidebarLink from "./components/SidebarLink";
import Avatar from "./components/Avatar";
import InputField from "./components/InputField";
import CustomButton from "./components/CustomButton";

interface UserType {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

const AccountPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserType>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const token = localStorage.getItem("accessToken"); // Đúng key

  useEffect(() => {
    if (!token) {
      alert("Bạn chưa đăng nhập!");
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8888/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (error: any) {
        console.error("Lỗi khi lấy user:", error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8888/auth/update", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Cập nhật thông tin thành công!");
    } catch (err: any) {
      console.error("Lỗi khi cập nhật:", err);
      if (err.response?.status === 403) {
        alert("Bạn không có quyền cập nhật thông tin.");
      } else {
        alert("Có lỗi xảy ra khi cập nhật.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Ecommerce</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">Settings</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">My Account</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-10">Account Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-2">
          <SidebarLink to="/account/orders" icon={<Package />} label="Orders" />
          <SidebarLink to="/account/wishlist" icon={<Heart />} label="Wishlist" />
          <SidebarLink to="/account/address" icon={<MapPin />} label="Address" />
          <SidebarLink to="/account/password" icon={<Key />} label="Password" />
          <SidebarLink to="/account" icon={<User />} label="Account Detail" exactActive />
          <SidebarLink to="/logout" icon={<LogOut />} label="Logout" />
        </aside>

        <section className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-6 mb-6">
            <Avatar initials={userData.name?.charAt(0).toUpperCase() || "U"} />
            <div>
              <p className="text-lg font-semibold text-gray-900">{userData.name}</p>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
            <InputField
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              value={userData.name || ""}
              onChange={handleChange}
            />
            <InputField
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={userData.email || ""}
              onChange={handleChange}
            />
            <InputField
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              value={userData.phone || ""}
              onChange={handleChange}
            />
            <InputField
              id="address"
              label="Address"
              name="address"
              autoComplete="street-address"
              value={userData.address || ""}
              onChange={handleChange}
            />
            <div className="pt-2">
              <CustomButton type="submit" variant="primary">Save Changes</CustomButton>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;

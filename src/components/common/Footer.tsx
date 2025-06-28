
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Perfume Store</h2>
          <p className="text-gray-400">
            Mang đến cho bạn những mùi hương đẳng cấp, tinh tế từ các thương hiệu nước hoa nổi tiếng trên thế giới.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
          <p className="text-gray-400">Địa chỉ: 123 Đường Hoa Hồng, Q.1, TP.HCM</p>
          <p className="text-gray-400">Điện thoại: 0909 999 999</p>
          <p className="text-gray-400">Email: support@perfumestore.vn</p>
        </div>
      </div>

      <div className="w-full text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Perfume Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

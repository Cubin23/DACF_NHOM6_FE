import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Giới thiệu thương hiệu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Perfume Store</h2>
          <p className="text-gray-400">
            Mang đến cho bạn những mùi hương đẳng cấp, tinh tế từ các thương hiệu nước hoa nổi tiếng trên thế giới.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>
          <p className="text-gray-400">Địa chỉ: 123 Đường Hoa Hồng, Q.1, TP.HCM</p>
          <p className="text-gray-400">Điện thoại: 0909 999 999</p>
          <p className="text-gray-400">Email: support@perfumestore.vn</p>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Perfume Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Form */}
        <div>
          <h1 className="text-4xl font-bold text-pink-700 mb-6">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-gray-600 mb-8">
            Nếu bạn có bất kỳ câu hỏi nào về sản phẩm hoặc cần tư vấn, hãy để lại lời nhắn cho chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Họ và tên</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Viết lời nhắn của bạn tại đây..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/965994/pexels-photo-965994.jpeg"
            alt="Perfume Contact"
            className="rounded-3xl shadow-lg w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/80 px-4 py-1 text-sm font-medium text-pink-700 rounded-full shadow">
            Hương thơm kết nối
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
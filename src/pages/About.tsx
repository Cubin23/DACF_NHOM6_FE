import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6 text-pink-700">Về Chúng Tôi</h1>
            <p className="text-lg mb-4">
              Chào mừng bạn đến với <span className="font-semibold text-pink-600">Perfume Elegance</span> – nơi hội tụ những hương thơm đẳng cấp và tinh tế nhất từ khắp nơi trên thế giới.
            </p>
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Với niềm đam mê mãnh liệt về nước hoa, chúng tôi cam kết mang đến cho bạn những sản phẩm chính hãng, phong cách phục vụ chuyên nghiệp và trải nghiệm mua sắm tuyệt vời.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Hãy để mỗi giọt hương đánh thức sự tự tin, quyến rũ và đẳng cấp trong bạn!
            </p>
          </div>

          {/* Image */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
              alt="Perfume Bottles"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white/80 px-4 py-1 text-sm font-medium text-pink-700 rounded-full shadow">
              Nước hoa cao cấp
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-pink-700 mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Chúng tôi không chỉ bán nước hoa – chúng tôi mang đến trải nghiệm hương thơm đầy cảm xúc.
            Mỗi sản phẩm là một hành trình, một cá tính riêng biệt, giúp bạn thể hiện bản thân một cách tinh tế và đầy cuốn hút.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
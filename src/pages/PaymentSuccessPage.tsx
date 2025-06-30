// src/pages/CodOrderResultPage.tsx
import { Link } from 'react-router-dom';

const CodOrderResultPage = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div
        style={{
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>📦</div>
        <h2 style={{ color: '#28a745', marginBottom: '10px' }}>Đặt hàng thành công</h2>
        <p style={{ color: '#555', marginBottom: '30px' }}>
          Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được ghi nhận và sẽ được xử lý trong thời gian sớm nhất.
        </p>

        <div style={{ textAlign: 'left', fontSize: '16px', lineHeight: 1.7 }}>
          <p><strong>Phương thức thanh toán:</strong> Thanh toán khi nhận hàng (COD)</p>
          <p><strong>Thời gian tạo đơn:</strong> {new Intl.DateTimeFormat('vi-VN', {
            dateStyle: 'full',
            timeStyle: 'short',
            hour12: false
          }).format(new Date())}</p>
          <p><strong>Trạng thái đơn hàng:</strong> Đang chờ xử lý</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodOrderResultPage;

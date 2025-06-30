import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

const CodOrderResultPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Giả sử giỏ hàng lưu ở localStorage với key 'cart'
    const cart = localStorage.getItem('cart');
    if (cart) {
      setProducts(JSON.parse(cart));
    }
  }, []);

  // Tính tổng tiền và thuế
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const tax = total * 0.05; 
  const totalWithTax = total + tax;

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

        {/* Hiển thị danh sách sản phẩm */}
        <div style={{ margin: '30px 0', textAlign: 'left' }}>
          <h3>Sản phẩm đã đặt:</h3>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {products.length === 0 && <li>Không có sản phẩm nào.</li>}
            {products.map((product) => (
              <li key={product.id} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                {product.image && (
                  <img src={product.image} alt={product.name} style={{ width: 48, height: 48, marginRight: 12, borderRadius: 4 }} />
                )}
                <span style={{ flex: 1 }}>{product.name}</span>
                <span style={{ margin: '0 10px' }}>x{product.quantity}</span>
                <span style={{ color: '#007bff', fontWeight: 600 }}>
                  {product.price.toLocaleString('vi-VN')}₫
                </span>
              </li>
            ))}
          </ul>
          {/* Tổng tiền và thuế */}
          <div style={{ marginTop: 16, borderTop: '1px solid #eee', paddingTop: 12 }}>
            <div><strong>Tổng tiền hàng:</strong> {total.toLocaleString('vi-VN')}₫</div>
            <div><strong>Thuế (5%):</strong> {tax.toLocaleString('vi-VN')}₫</div>
            <div><strong>Tổng thanh toán:</strong> {totalWithTax.toLocaleString('vi-VN')}₫</div>
          </div>
        </div>

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
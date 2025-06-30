import { useLocation } from 'react-router-dom';

const ReturnVnpayPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const status = params.get('status'); // success | failed | pending
  const message = params.get('message') || 'Đang xử lý giao dịch...';
  const txnRef = params.get('txnRef');
  const transactionNo = params.get('transactionNo');
  const amount = params.get('amount');
  const orderInfo = params.get('orderInfo');
  const bankCode = params.get('bankCode');
  const paymentTime = params.get('paymentTime');
  const responseCode = params.get('responseCode');

  const formatCurrency = (amount: string | null) =>
    amount ? new Intl.NumberFormat('vi-VN').format(Number(amount)) + ' ₫' : 'Không rõ';

  const formatDateTime = (iso: string | null) => {
    if (!iso) return 'Không xác định';
    const date = new Date(iso);
    return new Intl.DateTimeFormat('vi-VN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      hour12: false,
    }).format(date);
  };

  const renderStatusIcon = () => {
    if (status === 'success') return '✅';
    if (status === 'failed') return '❌';
    return '⏳';
  };

  const renderStatusText = () => {
    if (status === 'success') return 'Thanh toán thành công';
    if (status === 'failed') return 'Thanh toán thất bại';
    return 'Đang chờ xử lý thanh toán';
  };

  const statusColor = {
    success: '#28a745',
    failed: '#dc3545',
    pending: '#ffc107',
  }[status as string] || '#6c757d';

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
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>{renderStatusIcon()}</div>
        <h2 style={{ color: statusColor, marginBottom: '10px' }}>{renderStatusText()}</h2>
        <p style={{ color: '#555', marginBottom: '30px' }}>{message}</p>

        <div style={{ textAlign: 'left', fontSize: '16px', lineHeight: 1.7 }}>
          <p><strong>Mã đơn hàng:</strong> {txnRef}</p>
          <p><strong>Mã giao dịch:</strong> {transactionNo || 'Đang cập nhật...'}</p>
          <p><strong>Số tiền đã thanh toán:</strong> {formatCurrency(amount)}</p>
          <p><strong>Nội dung thanh toán:</strong> {orderInfo}</p>
          <p><strong>Ngân hàng:</strong> {bankCode || 'Không xác định'}</p>
          <p><strong>Thời gian thanh toán:</strong> {formatDateTime(paymentTime)}</p>
          <p><strong>Mã phản hồi từ VNPAY:</strong> {responseCode || 'Đang cập nhật'}</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <a href="/" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
          }}>
            Quay về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReturnVnpayPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import axios from "axios";

interface VolumeType {
  _id: string;
  label: string;
  size: number;
}

interface ProductType {
  _id: string;
  name: string;
  image: string;
  price: number;
  status: string;
  description?: string;
}

interface VariantType {
  _id: string;
  price: { $numberDecimal: string };
  volume_id: VolumeType;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [variants, setVariants] = useState<VariantType[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<VariantType | null>(null);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/productVariant/${id}`);
        const { current, variants } = res.data;

        setProduct({
          _id: current.product_id._id,
          name: current.product_id.name,
          image: current.product_id.image,
          price: Number(current.price?.$numberDecimal || 0),
          status: current.product_id.status || "Còn hàng",
          description: current.product_id.description,
        });

        setSelectedVariant(current);
        setVariants(variants);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", err);
      }
    };

    fetchData();
  }, [id]);

  const addToCart = (redirectToCheckout = false) => {
    if (!product || !selectedVariant) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      _id: selectedVariant._id,
      name: product.name,
      image: product.image,
      price: Number(selectedVariant.price.$numberDecimal),
      quantity,
      size: selectedVariant.volume_id.label,
    };

    const existingIndex = cart.findIndex(
      (item: any) =>
        item._id === cartItem._id && item.size === cartItem.size
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    if (redirectToCheckout) {
      localStorage.setItem("checkoutItems", JSON.stringify([cartItem]));
      navigate("/checkout");
    } else {
      navigate("/cart");
    }
  };

  if (!product || !selectedVariant) return <div className="text-center py-10">Đang tải sản phẩm...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">Ecommerce</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <div className="bg-gray-100 aspect-square flex items-center justify-center rounded-lg mb-4">
            <img src={product.image} alt={product.name} className="object-contain max-w-full max-h-full" />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <div className="text-2xl font-bold text-red-500 mb-4">
            {Number(selectedVariant.price.$numberDecimal).toLocaleString()}₫
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">DUNG TÍCH</h3>
            <div className="grid grid-cols-4 gap-2">
              {variants.map((v) => (
                <button
                  key={v._id}
                  onClick={() => {
                    setSelectedVariant(v);
                    setQuantity(1);
                  }}
                  className={`text-xs px-2 py-1 border rounded ${
                    selectedVariant._id === v._id
                      ? "bg-gray-900 text-white border-gray-900"
                      : "text-gray-500 border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {v.volume_id.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">SỐ LƯỢNG</h3>
            <div className="flex">
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="w-10 h-10 border rounded-l">
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-14 h-10 border-t border-b flex items-center justify-center">{quantity}</div>
              <button onClick={() => setQuantity(prev => prev + 1)} className="w-10 h-10 border rounded-r">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-6">
            <button
              onClick={() => addToCart(false)}
              className="flex-1 bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800"
            >
              Thêm vào giỏ
            </button>
            <button
              onClick={() => addToCart(true)}
              className="flex-1 bg-red-600 text-white py-3 px-6 rounded hover:bg-red-500"
            >
              Mua ngay
            </button>
          </div>

          <div className="text-sm text-gray-500 mb-8">Miễn phí giao hàng cho đơn từ 100.000₫</div>

          <div className="border-b mb-4 flex space-x-8">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "details" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Chi tiết
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Đánh giá
            </button>
          </div>

          <div className="text-sm text-gray-600">
            {activeTab === "details" ? product.description || "Không có mô tả." : "Chưa có đánh giá nào."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

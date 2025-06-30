import { Minus, Plus, X } from "lucide-react";
import QuantityButton from "./QuantityButton";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    size: string;
    image: { src: string; width?: number; height?: number } | string;
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  const imageSrc = typeof item.image === "string" ? item.image : item.image.src;

  return (
    <div key={item.id} className="flex border-b py-4">
      <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
        <img
          src={imageSrc}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium text-black">{item.name}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="text-gray-500 text-sm mt-1">
          <span className="ml-4">Size: {item.size}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <QuantityButton
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="rounded-l"
            >
              <Minus className="w-3 h-3" />
            </QuantityButton>
            <div className="w-10 h-8 border-t text-black border-b border-gray-300 flex items-center justify-center text-sm">
              {item.quantity}
            </div>
            <QuantityButton
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="rounded-r"
            >
              <Plus className="w-3 h-3" />
            </QuantityButton>
          </div>
          <div className="font-medium">${item.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

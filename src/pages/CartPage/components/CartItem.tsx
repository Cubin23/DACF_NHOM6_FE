import { Minus, Plus, X } from "lucide-react";
import QuantityButton from "./QuantityButton";

interface CartItemProps {
  item: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
  };
  selected: boolean;
  onSelect: (id: string, size: string) => void;
  onRemove: (id: string, size: string) => void;
  onUpdateQuantity: (id: string, size: string, qty: number) => void;
  onClickDetail: (id: string) => void;
}

const CartItem = ({ item, selected, onSelect, onRemove, onUpdateQuantity, onClickDetail }: CartItemProps) => (
  <div className="flex border-b py-4 items-start">
    <input
      type="checkbox"
      checked={selected}
      onChange={() => onSelect(item._id, item.size)}
      className="mt-2 mr-4"
    />
    <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 cursor-pointer" onClick={() => onClickDetail(item._id)}>
      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
    </div>
    <div className="ml-4 flex-grow">
      <div className="flex justify-between">
        <h3
          className="font-medium text-black cursor-pointer"
          onClick={() => onClickDetail(item._id)}
        >
          {item.name}
        </h3>
        <button onClick={() => onRemove(item._id, item.size)} className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="text-gray-500 text-sm mt-1">Size: {item.size}</div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <QuantityButton onClick={() => onUpdateQuantity(item._id, item.size, item.quantity - 1)} className="rounded-l">
            <Minus className="w-3 h-3" />
          </QuantityButton>
          <div className="w-10 h-8 border-t text-black border-b border-gray-300 flex items-center justify-center text-sm">
            {item.quantity}
          </div>
          <QuantityButton onClick={() => onUpdateQuantity(item._id, item.size, item.quantity + 1)} className="rounded-r">
            <Plus className="w-3 h-3" />
          </QuantityButton>
        </div>
        <div className="font-medium">{(item.price * item.quantity).toLocaleString()}₫</div>
      </div>
    </div>
  </div>
);


export default CartItem;

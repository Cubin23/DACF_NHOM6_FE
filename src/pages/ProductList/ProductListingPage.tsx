/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import VolumeButton from "./components/CustomButton";

const GENDERS = ["Men", "Women", "Unisex"];
const VOLUMES = ["100ml", "150ml", "200ml"];

const ProductListingPage = () => {
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleFilter = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const appliedFilters = [
    ...selectedGenders.map((g) => `Gender: ${g}`),
    ...selectedVolumes.map((v) => `Size: ${v}`),
    ...selectedTypes.map((t) => `Type: ${t}`),
  ];

  const removeFilter = (filter: string) => {
    const [category, value] = filter.split(": ").map((s) => s.trim());
    switch (category) {
      case "Gender":
        setSelectedGenders(selectedGenders.filter((g) => g !== value));
        break;
      case "Size":
        setSelectedVolumes(selectedVolumes.filter((v) => v !== value));
        break;
      case "Type":
        setSelectedTypes(selectedTypes.filter((t) => t !== value));
        break;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedGenders.length > 0) {
          params.append("genders", selectedGenders.join(","));
        }
        if (selectedVolumes.length > 0) {
          params.append("volumes", selectedVolumes.join(","));
        }
        if (selectedTypes.length > 0) {
          params.append("types", selectedTypes.join(","));
        }

        const res = await fetch(`http://localhost:8888/productVariant?${params.toString()}`);
        const json = await res.json();
        const data = Array.isArray(json) ? json : json.data || [];
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedGenders, selectedVolumes, selectedTypes]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-900">
          Ecommerce
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="mx-2 text-black">Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <div className="border rounded-lg p-4 sticky top-4">
            <h2 className="font-medium mb-3 text-black">Filters Sidebar</h2>
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Gender</h3>
              <div className="space-y-2">
                {GENDERS.map((gender) => (
                  <div className="flex items-center" key={gender}>
                    <input
                      type="checkbox"
                      id={gender.toLowerCase()}
                      className="h-4 w-4 text-gray-900 border-gray-300 rounded"
                      checked={selectedGenders.includes(gender)}
                      onChange={() => toggleFilter(gender, selectedGenders, setSelectedGenders)}
                    />
                    <label htmlFor={gender.toLowerCase()} className="ml-2 text-sm text-gray-600 cursor-pointer">
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-600">Size</h3>
              <div className="flex space-x-2">
                {VOLUMES.map((volume) => (
                  <VolumeButton
                    key={volume}
                    label={volume}
                    isSelected={selectedVolumes.includes(volume)}
                    onClick={() => toggleFilter(volume, selectedVolumes, setSelectedVolumes)}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Applied Filters:</div>
            <div className="flex flex-wrap gap-2 text-black">
              {appliedFilters.length === 0 && (
                <span className="text-gray-400 text-xs">No filters applied</span>
              )}
              {appliedFilters.map((filter) => (
                <span key={filter} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100">
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="ml-1 text-gray-500 hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              Showing {products.length} products.
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">SORT BY</span>
              <select className="text-sm border-gray-300 rounded-md focus:border-gray-500 focus:ring-gray-500">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center text-gray-500">Loading...</div>
            ) : products.length === 0 ? (
              <div className="col-span-full text-center text-gray-400">Không có sản phẩm nào phù hợp.</div>
            ) : (
              products.map((product: any) => {
                const image = product.product?.image || product.product_id?.image || "";
                const name = product.product?.name || product.product_id?.name || "No Name";
                const gender = product.product?.gender || product.product_id?.gender || "Unisex";
                const volume = product.volume?.label || product.volume_id?.label || "";
                const price = Number(product.price?.$numberDecimal || 0);

                return (
                  <Link to={`/product/${product._id}`} className="group" key={product._id}>
                    <div className="mb-3 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      {image ? (
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                      )}
                    </div>
                    <h3 className="font-medium text-sm text-gray-800">{name}</h3>
                    <div className="text-gray-900 font-semibold mt-1 text-sm">
                      {price > 0 ? `${price.toLocaleString()}₫` : "Chưa có giá"}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {gender} | {volume}
                    </div>
                  </Link>
                );
              })
            )}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="flex items-center">
              <button className="p-2 border rounded-l-md hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button className="px-4 py-2 border-t border-b bg-gray-600 text-white">1</button>
              <button className="px-4 py-2 border-t border-b text-gray-300 hover:bg-gray-50 hover:text-black">2</button>
              <button className="p-2 border rounded-r-md hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
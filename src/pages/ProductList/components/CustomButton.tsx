import React from "react";

type VolumeButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const VolumeButton: React.FC<VolumeButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded text-sm border ${
        isSelected
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white text-gray-700 border-gray-300"
      } hover:bg-blue-400 hover:text-white transition`}
    >
      {label}
    </button>
  );
};

export default VolumeButton;

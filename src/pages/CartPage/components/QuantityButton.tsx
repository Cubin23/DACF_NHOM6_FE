import type { MouseEventHandler } from "react";

interface QuantityButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

const QuantityButton = ({
  onClick,
  children,
  className = "",
}: QuantityButtonProps) => (
  <button
    onClick={onClick}
    className={`w-15 h-15 border border-gray-300 flex items-center justify-center text-black ${className}`}
  >
    {children}
  </button>
);

export default QuantityButton;

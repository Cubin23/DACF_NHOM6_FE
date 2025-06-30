import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

const CustomButton = ({
  children,
  variant = "outline",
  className = "",
  ...rest
}: CustomButtonProps) => {
  const baseClass =
    "w-full py-2 px-6 rounded-md transition-colors flex items-center justify-center gap-2";

  const styles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-black hover:bg-gray-50",
  };

  return (
    <button
      {...rest}
      className={`${baseClass} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

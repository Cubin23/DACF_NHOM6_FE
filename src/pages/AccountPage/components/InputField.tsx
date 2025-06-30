import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const InputField = ({
  label,
  error,
  id,
  className = "",
  ...rest
}: InputFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200 ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
      {...rest}
    />
    {error?.message && (
      <p className="text-red-500 text-xs mt-1">{error.message}</p>
    )}
  </div>
);

export default InputField;

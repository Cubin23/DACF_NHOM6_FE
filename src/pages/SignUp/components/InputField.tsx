import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const InputField = ({ label, error, ...rest }: InputFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...rest}
        className="w-full text-black pl-4 py-2 pr-4 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default InputField;

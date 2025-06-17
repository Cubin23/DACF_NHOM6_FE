// src/components/VolumeButton.tsx
import { ButtonHTMLAttributes } from "react"

interface VolumeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isSelected?: boolean
}

const VolumeButton = ({ label, isSelected = false, ...rest }: VolumeButtonProps) => {
  return (
    <button
      {...rest}
      className={`
        px-2 py-1 text-xs border rounded
        ${isSelected ? "bg-black text-white border-black" : "text-gray-500 border-gray-300 hover:text-black"}
      `}
    >
      {label}
    </button>
  )
}

export default VolumeButton

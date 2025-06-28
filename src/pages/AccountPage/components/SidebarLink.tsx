import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  exactActive?: boolean;
}

const SidebarLink = ({
  to,
  icon,
  label,
  exactActive = false,
}: SidebarLinkProps) => {
  const location = useLocation();

  const isActive = exactActive
    ? location.pathname === to
    : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-md ${
        isActive
          ? "text-gray-900 bg-gray-100"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="w-5 h-5 mr-3 flex-shrink-0">{icon}</span>
      {label}
    </Link>
  );
};

export default SidebarLink;

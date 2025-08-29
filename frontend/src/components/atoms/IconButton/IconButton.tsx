import React from "react";

interface IconButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ title, onClick, className="", children }) => {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className={`p-1.5 rounded-md hover:bg-neutral-100 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;

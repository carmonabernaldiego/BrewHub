import React, { forwardRef } from "react";

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps extends NativeInputProps {
  size?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className = "", size = "md", ...props }, ref) => {
    const sizeClasses: Record<NonNullable<InputProps["size"]>, string> = {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-2",
      lg: "text-base px-4 py-3",
    };

    return (
      <input
        ref={ref}
        type={type}
        className={`w-full border border-gray-300 rounded-md
                    focus:outline-none focus:ring-1 focus:ring-coffee-600
                    focus:border-coffee-600 ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

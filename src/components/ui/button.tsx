"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  teacher: "bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] text-white hover:opacity-90",
  outline: "bg-white text-[var(--text)] border-[1.5px] border-[var(--border)] hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-[var(--sub)] hover:text-primary",
  danger: "bg-[var(--red-bg)] text-[#DC2626] hover:bg-[#DC2626] hover:text-white",
  success: "bg-[var(--green-bg)] text-[#065F46] hover:bg-[var(--green)] hover:text-white",
};

const sizes = {
  default: "px-[18px] py-2 text-xs",
  sm: "px-3 py-1.5 text-[11px] rounded-lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        inline-flex items-center gap-1.5 rounded-[10px] font-extrabold
        transition-all duration-[0.18s] disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import { type ReactNode } from "react";

const variants: Record<string, string> = {
  green: "bg-[var(--green-bg)] text-[#065F46]",
  amber: "bg-[var(--amber-bg)] text-[#92400E]",
  red: "bg-[var(--red-bg)] text-[#DC2626]",
  purple: "bg-[var(--purple-bg)] text-[#6D28D9]",
  blue: "bg-[var(--blue-bg)] text-[#1D4ED8]",
  gray: "bg-[#F3F4F6] text-[var(--sub)]",
};

interface BadgeProps {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}

export function Badge({
  variant = "gray",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2.5 py-[3px] rounded-md
        text-[10px] font-extrabold
        ${variants[variant] ?? variants.gray} ${className}
      `}
    >
      {children}
    </span>
  );
}

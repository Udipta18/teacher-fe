"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[var(--radius)] shadow-[var(--shadow)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`py-[18px] px-5 pb-3.5 flex items-center justify-between border-b border-[var(--border)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <div className="text-sm font-extrabold">{children}</div>;
}

export function CardBody({
  children,
  className = "",
  noPadding,
}: {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <div
      className={noPadding ? className : `p-4 pt-4 pb-4 px-5 ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import { type ReactNode } from "react";
import { Button } from "./button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  maxWidth = "max-w-[520px]",
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(30,27,75,0.45)] backdrop-blur-sm z-[200] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-white rounded-[20px] w-[90%] ${maxWidth} shadow-[0_24px_64px_rgba(0,0,0,0.2)] animate-[modalIn_0.25s_cubic-bezier(0.34,1.56,0.64,1)]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-5 px-6 pb-4 border-b border-[var(--border)] flex items-center justify-between">
          <div className="text-base font-black">{title}</div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[var(--bg)] flex items-center justify-center text-base hover:bg-[var(--red-bg)] hover:text-[var(--red)] transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-5 pt-5 pb-5 px-6">{children}</div>
        {footer !== undefined && (
          <div className="py-4 px-6 border-t border-[var(--border)] flex gap-2.5 justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export function ModalFooter({
  onCancel,
  onConfirm,
  confirmLabel,
  cancelLabel = "Cancel",
  variant = "teacher",
}: {
  onCancel: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "teacher" | "primary" | "outline";
}) {
  return (
    <>
      <Button variant="outline" onClick={onCancel}>
        {cancelLabel}
      </Button>
      {confirmLabel && onConfirm && (
        <Button variant={variant} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      )}
    </>
  );
}

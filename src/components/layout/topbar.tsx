"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

interface TopbarProps {
  title: string;
  onMenuClick?: () => void;
}

export function Topbar({ title, onMenuClick }: TopbarProps) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="bg-white py-3.5 px-7 flex items-center gap-4 border-b border-[var(--border)] sticky top-0 z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <button
        type="button"
        onClick={onMenuClick}
        className="hidden max-lg:block text-[22px] cursor-pointer bg-transparent border-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <h1 className="text-lg font-black flex-1">{title}</h1>
      <div className="flex items-center gap-2 min-w-[220px] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-xl py-2 px-3.5">
        <span>🔍</span>
        <input
          type="search"
          placeholder="Search students, exams..."
          className="border-none bg-transparent outline-none font-nunito text-xs text-[var(--text)] w-full"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <Link
          href="/dashboard/notifications"
          className="w-[38px] h-[38px] rounded-[10px] border-[1.5px] border-[var(--border)] bg-white flex items-center justify-center text-base relative hover:bg-[var(--bg)] hover:border-primary transition-colors"
        >
          🔔
          <span className="absolute top-1.5 right-1.5 w-[7px] h-[7px] rounded-full bg-[var(--teacher)] border-[1.5px] border-white" />
        </Link>
        <Link
          href="/login"
          onClick={(e) => { e.preventDefault(); handleLogout(); }}
          className="flex items-center gap-2 bg-[var(--bg)] rounded-xl py-1.5 pr-3 pl-1.5 cursor-pointer"
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{ background: user?.avatarBg }}
          >
            {user?.avatarEmoji}
          </div>
          <span className="text-xs font-extrabold">{user?.role === "student" ? "Aisha" : user?.name}</span>
        </Link>
      </div>
    </header>
  );
}

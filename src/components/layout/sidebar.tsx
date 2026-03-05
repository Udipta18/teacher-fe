"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

const TEACHER_NAV = [
  { section: "Main", items: [{ id: "dashboard", label: "Dashboard", icon: "🏠", href: "/dashboard" }, { id: "students", label: "Students", icon: "👥", href: "/dashboard/students", badge: "24" }] },
  { section: "Management", items: [{ id: "payments", label: "Payments", icon: "💳", href: "/dashboard/payments", badge: "3", badgeStyle: "bg-[#FBBF24] text-[#1E1B4B]" }, { id: "schedule", label: "Schedule", icon: "📅", href: "/dashboard/schedule" }, { id: "homework", label: "Homework", icon: "📁", href: "/dashboard/homework" }, { id: "exams", label: "Exams", icon: "📝", href: "/dashboard/exams" }] },
  { section: "Other", items: [{ id: "results", label: "Results", icon: "📊", href: "/dashboard/results" }] },
];

const STUDENT_NAV = [
  { section: "My Portal", items: [{ id: "s-dashboard", label: "Dashboard", icon: "🏠", href: "/dashboard" }, { id: "s-schedule", label: "My Schedule", icon: "📅", href: "/dashboard/schedule" }, { id: "s-homework", label: "Homework", icon: "📁", href: "/dashboard/homework", badge: "3", badgeStyle: "bg-[#4ECDC4]" }, { id: "s-exams", label: "My Exams", icon: "📝", href: "/dashboard/exams" }, { id: "s-results", label: "My Results", icon: "🏆", href: "/dashboard/results" }, { id: "s-payments", label: "My Payments", icon: "💳", href: "/dashboard/payments" }] },
];

export function Sidebar({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isTeacher = user?.role === "teacher";
  const nav = isTeacher ? TEACHER_NAV : STUDENT_NAV;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav
      className={`
        fixed left-0 top-0 bottom-0 z-50 w-[230px] bg-[var(--sidebar)]
        flex flex-col transition-transform duration-300 ease-out
        lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="py-[22px] px-5 pb-4 flex items-center gap-3 border-b border-white/10">
        <div className="w-10 h-10 rounded-xl bg-[var(--teacher-g)] flex items-center justify-center text-xl shrink-0">
          🎓
        </div>
        <div>
          <div className="text-lg font-black text-white tracking-tight">TuitionHub</div>
          <div className="text-[10px] text-white/40 font-semibold">Management System</div>
        </div>
      </div>

      <div className="my-3.5 mx-4 bg-white/5 rounded-xl py-2.5 px-3.5 flex items-center gap-2.5">
        <div
          className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-base shrink-0"
          style={{ background: user?.avatarBg }}
        >
          {user?.avatarEmoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-extrabold text-white truncate">{user?.name}</div>
          <div className="text-[10px] text-white/45 font-semibold">{user?.label}</div>
        </div>
        <Link
          href="/login"
          onClick={(e) => { e.preventDefault(); handleLogout(); }}
          className="ml-auto py-[3px] px-2 rounded-md bg-white/10 border-none text-white/60 text-[9px] font-extrabold cursor-pointer hover:bg-white/20 hover:text-white transition-colors"
        >
          ↩ Switch
        </Link>
      </div>

      {nav.map((group) => (
        <div key={group.section} className="pt-2.5 px-4 pb-1">
          <div className="text-[9px] font-extrabold tracking-widest uppercase text-white/30 px-4 py-0 mb-0">
            {group.section}
          </div>
          {group.items.map((item) => {
            const active = pathname === item.href || (item.href === "/dashboard" && pathname === "/dashboard");
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  flex items-center gap-3 py-2.5 px-4 mx-2.5 rounded-xl cursor-pointer transition-all duration-[0.18s]
                  border-none text-left w-[calc(100%-20px)] font-nunito
                  ${active ? "bg-primary/40" : "bg-transparent hover:bg-white/10"}
                `}
              >
                <span className="text-base w-5 text-center shrink-0">{item.icon}</span>
                <span className={`text-[13px] font-bold shrink-0 ${active ? "text-white" : "text-white/75"}`}>
                  {item.label}
                </span>
                {item.badge && (
                  <span
                    className={`ml-auto min-w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-black text-white px-1 ${item.badgeStyle ?? "bg-[var(--teacher)]"}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      ))}

      <div className="mt-auto p-4 border-t border-white/10">
        <Link
          href="/login"
          onClick={(e) => { e.preventDefault(); handleLogout(); }}
          className="w-full py-2.5 rounded-xl border border-white/10 bg-transparent text-white/50 text-xs font-bold cursor-pointer flex items-center justify-center gap-2 hover:bg-[rgba(248,113,113,0.15)] hover:text-[var(--red)] hover:border-[var(--red)] transition-colors"
        >
          🚪 Sign Out
        </Link>
      </div>
    </nav>
  );
}

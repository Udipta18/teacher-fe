"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { PAGE_TITLES } from "@/lib/constants";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
  }, [isAuthenticated, router]);

  const title = pathname === "/dashboard"
    ? (user?.role === "teacher" ? PAGE_TITLES.dashboard : PAGE_TITLES["s-dashboard"])
    : PAGE_TITLES[pathname.split("/").pop() ?? ""] ?? "Dashboard";

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="animate-pulse text-[var(--sub)] font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((o) => !o)} />
      <main className="flex-1 flex flex-col min-h-screen lg:ml-[230px]">
        <Topbar title={title} onMenuClick={() => setSidebarOpen(true)} />
        <div className="p-6 pt-6 px-7 flex-1">{children}</div>
      </main>
    </div>
  );
}

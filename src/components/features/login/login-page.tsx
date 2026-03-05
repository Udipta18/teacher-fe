"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Role } from "@/types";
import { useAuth } from "@/context/auth-context";

export function LoginPage() {
  const [role, setRole] = useState<Role>("teacher");
  const [email, setEmail] = useState("teacher@tuitionhub.com");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    router.push("/dashboard");
  };

  return (
    <div className="fixed inset-0 z-[300] bg-gradient-to-br from-[#1E1B4B] via-[#3730A3] to-primary flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-[440px] bg-white rounded-[24px] shadow-[0_32px_80px_rgba(0,0,0,0.3)] overflow-hidden my-auto">
        <div
          className="py-8 text-center text-white px-8"
          style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}
        >
          <div className="text-4xl mb-2">🎓</div>
          <div className="text-2xl font-black">TuitionHub</div>
          <div className="text-[13px] opacity-80 mt-1">Your complete tuition management system</div>
        </div>
        <form onSubmit={handleSubmit} className="p-7 overflow-y-auto min-h-0">
          <div className="grid grid-cols-2 border border-gray-200 rounded-xl mb-5 overflow-hidden">
            <button
              type="button"
              onClick={() => { setRole("teacher"); setEmail("teacher@tuitionhub.com"); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-[13px] font-extrabold transition-colors border-none font-nunito cursor-pointer w-full"
              style={role === "teacher" ? { background: "linear-gradient(135deg, #FF6B6B, #FF8E53)", color: "white" } : { background: "white", color: "#6b7280" }}
            >
              <span className="shrink-0" aria-hidden>📚</span>
              <span>Teacher</span>
            </button>
            <button
              type="button"
              onClick={() => { setRole("student"); setEmail("aisha@student.com"); }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-[13px] font-extrabold transition-colors border-none font-nunito cursor-pointer w-full"
              style={role === "student" ? { background: "linear-gradient(135deg, #4ECDC4, #556270)", color: "white" } : { background: "white", color: "#6b7280" }}
            >
              <span className="shrink-0" aria-hidden>🎒</span>
              <span>Student</span>
            </button>
          </div>
          <div className="mb-3.5">
            <label className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">EMAIL ADDRESS</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-xl border border-gray-200 font-nunito text-[13px] outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-colors"
            />
          </div>
          <div className="mb-3.5">
            <label className="text-[11px] font-extrabold text-gray-500 mb-1.5 block">PASSWORD</label>
            <input
              type="password"
              defaultValue="••••••••"
              placeholder="Enter your password"
              className="w-full py-3 px-4 rounded-xl border border-gray-200 font-nunito text-[13px] outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-colors"
            />
          </div>
          <button
            type="submit"
            style={role === "teacher" ? { background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" } : { background: "linear-gradient(135deg, #4ECDC4, #556270)" }}
            className="w-full py-3.5 mt-2 rounded-xl border-none font-nunito font-black text-sm cursor-pointer text-white transition-all hover:opacity-95 hover:shadow-lg flex items-center justify-center gap-2"
          >
            {role === "teacher" ? "Sign In as Teacher →" : "Sign In as Student →"}
          </button>
          <p className="text-center mt-3 text-[11px] text-gray-500">
            Forgot password? <span className="text-[#6C63FF] cursor-pointer font-bold underline">Reset here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Role, User } from "@/types";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: Role, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const TEACHER_USER: User = {
  name: "Mrs. Priya",
  email: "teacher@tuitionhub.com",
  role: "teacher",
  label: "Teacher · Admin",
  avatarBg: "linear-gradient(135deg,#FF6B6B,#FF8E53)",
  avatarEmoji: "👩‍🏫",
};

const STUDENT_USER: User = {
  name: "Aisha Rahman",
  email: "aisha@student.com",
  role: "student",
  label: "Student · Form 3",
  avatarBg: "linear-gradient(135deg,#4ECDC4,#556270)",
  avatarEmoji: "🎒",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((role: Role) => {
    setUser(role === "teacher" ? TEACHER_USER : STUDENT_USER);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

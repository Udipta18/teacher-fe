export type Role = "teacher" | "student";

export interface User {
  name: string;
  email: string;
  role: Role;
  label: string;
  avatarBg: string;
  avatarEmoji: string;
}

export interface Student {
  name: string;
  subjects: string;
  form: string;
  contact: string;
  pay: "paid" | "pending" | "overdue";
  color: string;
  init: string;
}

export interface ScheduleClass {
  day: number;
  time: number;
  rows: number;
  name: string;
  sub: string;
  color: string;
  tc: string;
}

export interface PaymentRecord {
  student: string;
  amount: string;
  subjects: string;
  dueDate: string;
  paidDate: string;
  status: "paid" | "pending" | "overdue";
  init: string;
  color: string;
}

export interface ExamCard {
  subject: string;
  form: string;
  title: string;
  meta: string;
  gradient: string;
  stats?: { label: string; value: string }[];
  badge: "published" | "draft";
}

export interface NotificationItem {
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
  time: string;
}

export interface FileCard {
  name: string;
  meta: string;
  iconBg: string;
  downloads?: string;
}

import type { Student, ScheduleClass } from "@/types";

export const SIDEBAR_WIDTH = 230;

export const DAYS = ["", "Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15"];
export const TIMES = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"];

export const STUDENTS: Student[] = [
  { name: "Aisha Rahman", subjects: "Maths, Science, English", form: "Form 3", contact: "012-3456789", pay: "paid", color: "linear-gradient(135deg,#FF6B6B,#FF8E53)", init: "A" },
  { name: "Rajan Kumar", subjects: "Maths, Physics", form: "Form 4", contact: "011-2345678", pay: "pending", color: "linear-gradient(135deg,#4ECDC4,#667EEA)", init: "R" },
  { name: "Sara Lee", subjects: "English, History", form: "Form 2", contact: "016-7891234", pay: "paid", color: "linear-gradient(135deg,#A78BFA,#EC4899)", init: "S" },
  { name: "Mohamed Zain", subjects: "Science, Chemistry", form: "Form 5", contact: "019-5678901", pay: "overdue", color: "linear-gradient(135deg,#34D399,#06B6D4)", init: "M" },
  { name: "Preethi Nair", subjects: "Maths, Science", form: "Form 3", contact: "017-3456780", pay: "paid", color: "linear-gradient(135deg,#FCD34D,#F59E0B)", init: "P" },
  { name: "Kavitha Raj", subjects: "English, Maths", form: "Form 2", contact: "013-4567891", pay: "pending", color: "linear-gradient(135deg,#60A5FA,#3B82F6)", init: "K" },
  { name: "Daniel Wong", subjects: "Science, Chemistry", form: "Form 4", contact: "014-5678902", pay: "paid", color: "linear-gradient(135deg,#F9A8D4,#EC4899)", init: "D" },
  { name: "Nurul Ain", subjects: "Maths, English, History", form: "Form 1", contact: "010-6789013", pay: "paid", color: "linear-gradient(135deg,#6EE7B7,#34D399)", init: "N" },
];

export const SCHEDULE_CLASSES: ScheduleClass[] = [
  { day: 1, time: 0, rows: 2, name: "Maths", sub: "Form 3·8pax", color: "#FEE2E2", tc: "#DC2626" },
  { day: 1, time: 5, rows: 2, name: "English", sub: "Form 2·6pax", color: "#EDE9FE", tc: "#7C3AED" },
  { day: 2, time: 0, rows: 2, name: "Maths", sub: "Form 3", color: "#FEE2E2", tc: "#DC2626" },
  { day: 2, time: 2, rows: 2, name: "Science", sub: "Form 4·10pax", color: "#D5F5F3", tc: "#0F766E" },
  { day: 2, time: 6, rows: 2, name: "Chemistry", sub: "Form 5·5pax", color: "#FEF3C7", tc: "#B45309" },
  { day: 3, time: 2, rows: 2, name: "Science", sub: "Form 4", color: "#D5F5F3", tc: "#0F766E" },
  { day: 3, time: 5, rows: 2, name: "English", sub: "Form 2", color: "#EDE9FE", tc: "#7C3AED" },
  { day: 4, time: 0, rows: 2, name: "Maths", sub: "Form 3", color: "#FEE2E2", tc: "#DC2626" },
  { day: 4, time: 6, rows: 2, name: "Chemistry", sub: "Form 5", color: "#FEF3C7", tc: "#B45309" },
  { day: 5, time: 2, rows: 2, name: "Science", sub: "Form 4", color: "#D5F5F3", tc: "#0F766E" },
  { day: 5, time: 5, rows: 2, name: "English", sub: "Form 2", color: "#EDE9FE", tc: "#7C3AED" },
];

export const PAGE_TITLES: Record<string, string> = {
  dashboard: "Dashboard",
  students: "Manage Students",
  payments: "Payments",
  schedule: "Class Schedule",
  homework: "Homework & Worksheets",
  exams: "MCQ Exams",
  results: "Exam Results",
  notifications: "Notifications",
  "s-dashboard": "My Dashboard",
  "s-schedule": "My Schedule",
  "s-homework": "My Homework",
  "s-exams": "My Exams",
  "s-results": "My Results",
  "s-payments": "My Payments",
};

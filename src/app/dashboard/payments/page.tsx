"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";
import { StudentPaymentFlow } from "@/components/features/payment/student-payment-flow";

const PAYMENTS = [
  { student: "Aisha Rahman", amount: "RM 150", subjects: "3 subjects", dueDate: "Feb 10", paidDate: "Feb 2", status: "paid" as const, init: "A", color: "linear-gradient(135deg,#FF6B6B,#FF8E53)" },
  { student: "Rajan Kumar", amount: "RM 100", subjects: "2 subjects", dueDate: "Feb 15", paidDate: "–", status: "pending" as const, init: "R", color: "linear-gradient(135deg,#4ECDC4,#667EEA)" },
  { student: "Sara Lee", amount: "RM 80", subjects: "2 subjects", dueDate: "Feb 10", paidDate: "Feb 5", status: "paid" as const, init: "S", color: "linear-gradient(135deg,#A78BFA,#EC4899)" },
  { student: "Mohamed Zain", amount: "RM 120", subjects: "2 subjects", dueDate: "Jan 15", paidDate: "–", status: "overdue" as const, init: "M", color: "linear-gradient(135deg,#34D399,#06B6D4)" },
  { student: "Preethi Nair", amount: "RM 100", subjects: "2 subjects", dueDate: "Feb 10", paidDate: "Feb 8", status: "paid" as const, init: "P", color: "linear-gradient(135deg,#FCD34D,#F59E0B)" },
  { student: "Kavitha Raj", amount: "RM 80", subjects: "2 subjects", dueDate: "Feb 18", paidDate: "–", status: "pending" as const, init: "K", color: "linear-gradient(135deg,#60A5FA,#3B82F6)" },
];

export default function PaymentsPage() {
  const { user } = useAuth();
  const isTeacher = user?.role === "teacher";

  if (!isTeacher) {
    return <StudentPaymentFlow />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        <div className="rounded-[var(--radius)] p-4 text-center shadow-[var(--shadow)] bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]">
          <div className="text-[28px] font-black text-[#065F46]">21</div>
          <div className="text-[11px] font-bold text-[#047857] mt-0.5">✅ Paid</div>
        </div>
        <div className="rounded-[var(--radius)] p-4 text-center shadow-[var(--shadow)] bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]">
          <div className="text-[28px] font-black text-[#92400E]">2</div>
          <div className="text-[11px] font-bold text-[#B45309] mt-0.5">⏳ Pending</div>
        </div>
        <div className="rounded-[var(--radius)] p-4 text-center shadow-[var(--shadow)] bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2]">
          <div className="text-[28px] font-black text-[#991B1B]">1</div>
          <div className="text-[11px] font-bold text-[#DC2626] mt-0.5">🚨 Overdue</div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>💳 Payment Records – February 2026</CardTitle>
          <div className="flex gap-2">
            <select className="rounded-lg py-1.5 px-2.5 text-[11px] border-[1.5px] border-[var(--border)] bg-white font-nunito">
              <option>February 2026</option>
              <option>January 2026</option>
              <option>December 2025</option>
            </select>
            <Button variant="outline" size="sm">📊 Export</Button>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Student</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Amount</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subjects</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Due Date</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Paid Date</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Status</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Action</th>
              </tr>
            </thead>
            <tbody>
              {PAYMENTS.map((p) => (
                <tr key={p.student} className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[15px] font-black text-white shrink-0" style={{ background: p.color }}>{p.init}</div>
                      <div className="font-extrabold text-[13px]">{p.student}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-extrabold">{p.amount}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{p.subjects}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{p.dueDate}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{p.paidDate}</td>
                  <td className="py-3 px-4">
                    {p.status === "paid" && <Badge variant="green">✅ Paid</Badge>}
                    {p.status === "pending" && <Badge variant="amber">⏳ Pending</Badge>}
                    {p.status === "overdue" && <Badge variant="red">🚨 Overdue</Badge>}
                  </td>
                  <td className="py-3 px-4">
                    {p.status === "paid" ? <Button variant="ghost" size="sm">Receipt</Button> : p.status === "overdue" ? <Button variant="danger" size="sm">Send Reminder</Button> : <Button variant="success" size="sm">Mark Paid</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

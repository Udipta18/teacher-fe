"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";
import { STUDENTS } from "@/lib/constants";

export default function StudentsPage() {
  const [students, setStudents] = useState(STUDENTS);

  const payBadge = (pay: string) => {
    if (pay === "paid") return <Badge variant="green">✅ Paid</Badge>;
    if (pay === "pending") return <Badge variant="amber">⏳ Pending</Badge>;
    return <Badge variant="red">🚨 Overdue</Badge>;
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[13px] text-[var(--sub)] font-semibold">
          {students.length} students enrolled across 6 subjects
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">🔽 Filter</Button>
          <Button variant="teacher">+ Add Student</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <div className="flex gap-2">
            <Badge variant="gray" className="cursor-pointer">All</Badge>
            <Badge variant="red" className="cursor-pointer">Maths</Badge>
            <Badge variant="blue" className="cursor-pointer">Science</Badge>
            <Badge variant="purple" className="cursor-pointer">English</Badge>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Student</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subjects</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Form</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Contact</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Payment</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.name} className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[15px] font-black text-white shrink-0" style={{ background: s.color }}>{s.init}</div>
                      <div className="font-extrabold text-[13px]">{s.name}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[var(--sub)] text-xs font-semibold">{s.subjects}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{s.form}</td>
                  <td className="py-3 px-4 text-[var(--sub)] text-xs font-semibold">{s.contact}</td>
                  <td className="py-3 px-4">{payBadge(s.pay)}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="ghost" size="sm">✏️</Button>
                      <Button variant="danger" size="sm" onClick={() => setStudents((prev) => prev.filter((x) => x.name !== s.name))}>🗑️</Button>
                    </div>
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

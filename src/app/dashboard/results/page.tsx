"use client";

import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";

const RESULTS = [
  { name: "Aisha Rahman", score: "90%", correct: "18/20", wrong: "2", time: "24 min", grade: "A+", color: "linear-gradient(135deg,#FF6B6B,#FF8E53)", init: "A" },
  { name: "Sara Lee", score: "85%", correct: "17/20", wrong: "3", time: "28 min", grade: "A", color: "linear-gradient(135deg,#A78BFA,#EC4899)", init: "S" },
  { name: "Preethi Nair", score: "80%", correct: "16/20", wrong: "4", time: "29 min", grade: "B+", color: "linear-gradient(135deg,#FCD34D,#F59E0B)", init: "P" },
  { name: "Rajan Kumar", score: "65%", correct: "13/20", wrong: "7", time: "30 min", grade: "C+", color: "linear-gradient(135deg,#4ECDC4,#667EEA)", init: "R" },
  { name: "Mohamed Zain", score: "55%", correct: "11/20", wrong: "9", time: "30 min", grade: "D", color: "linear-gradient(135deg,#34D399,#06B6D4)", init: "M" },
];

export default function ResultsPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <Card>
          <CardBody className="text-center py-5 px-5">
            <div className="text-4xl font-black text-[var(--teacher)]">82%</div>
            <div className="text-xs text-[var(--sub)] font-bold">Average Score</div>
            <div className="text-[11px] text-[var(--green)] font-bold mt-1">↑ +5% vs last month</div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="text-center py-5 px-5">
            <div className="text-4xl font-black text-primary">34</div>
            <div className="text-xs text-[var(--sub)] font-bold">Exams Completed</div>
            <div className="text-[11px] text-[var(--sub)] font-bold mt-1">This month</div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="text-center py-5 px-5">
            <div className="text-4xl font-black text-[var(--green)]">19</div>
            <div className="text-xs text-[var(--sub)] font-bold">Students Passed</div>
            <div className="text-[11px] text-[var(--red)] font-bold mt-1">5 need attention</div>
          </CardBody>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>📊 Student Results – Algebra Chapter 5</CardTitle>
          <Button variant="outline" size="sm">📤 Export</Button>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Student</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Score</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Correct</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Wrong</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Time Taken</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Grade</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r) => (
                <tr key={r.name} className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[15px] font-black text-white shrink-0" style={{ background: r.color }}>{r.init}</div>
                      <div className="font-extrabold text-[13px]">{r.name}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-bold">{r.score}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{r.correct}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{r.wrong}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{r.time}</td>
                  <td className="py-3 px-4"><Badge variant={r.grade.startsWith("A") || r.grade.startsWith("B") ? "green" : r.grade === "C+" ? "amber" : "red"}>{r.grade}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

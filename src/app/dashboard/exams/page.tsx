"use client";

import Link from "next/link";
import { Card, CardBody, Button, Badge } from "@/components/ui";

const EXAMS = [
  { subject: "MATHEMATICS · FORM 3", title: "📐 Algebra Chapter 5 Test", meta: "20 questions · 30 minutes · Published Feb 8", gradient: "linear-gradient(135deg,#FF6B6B,#FF8E53)", stats: [{ l: "👥 24 attempted" }, { l: "📊 Avg: 82%" }, { l: "🏆 High: 100%" }, { l: "⚠️ Low: 45%" }], badge: "published" as const },
  { subject: "SCIENCE · FORM 4", title: "🔬 Cell Biology Quiz", meta: "15 questions · 20 minutes · Published Feb 6", gradient: "linear-gradient(135deg,#4ECDC4,#556270)", stats: [{ l: "👥 10 attempted" }, { l: "📊 Avg: 68%" }, { l: "🏆 High: 93%" }, { l: "⚠️ Low: 40%" }], badge: "published" as const },
  { subject: "ENGLISH · FORM 2", title: "📖 Grammar & Comprehension", meta: "10 questions · 15 minutes · Draft", gradient: "linear-gradient(135deg,#A78BFA,#EC4899)", stats: [], badge: "draft" as const },
];

export default function ExamsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[13px] text-[var(--sub)] font-semibold">5 exams · 3 published · 2 drafts</p>
        <Button variant="teacher">+ Create Exam</Button>
      </div>
      <div className="space-y-3.5">
        {EXAMS.map((exam) => (
          <div key={exam.title} className="bg-white rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow)] hover:-translate-y-0.5 transition-transform">
            <div className="p-4 pt-5 text-white" style={{ background: exam.gradient }}>
              <div className="text-[11px] opacity-80 font-bold mb-1">{exam.subject}</div>
              <div className="text-lg font-black">{exam.title}</div>
              <div className="text-[11px] opacity-75 mt-1">{exam.meta}</div>
            </div>
            <div className="bg-white p-3.5 px-5 flex items-center justify-between">
              <div className="flex gap-4">
                {exam.stats.map((s) => (
                  <span key={s.l} className="text-[11px] text-[var(--sub)] font-bold flex items-center gap-1">{s.l}</span>
                ))}
                {exam.stats.length === 0 && <span className="text-[11px] text-[var(--sub)] font-bold">⏳ Not yet published</span>}
              </div>
              <div className="flex gap-2">
                {exam.badge === "published" ? <Badge variant="green">✓ Published</Badge> : <Badge variant="amber">⏳ Draft</Badge>}
                {exam.badge === "published" ? <Link href="/dashboard/results"><Button variant="outline" size="sm">View Results</Button></Link> : <><Button variant="outline" size="sm">Edit</Button><Button variant="primary" size="sm">Publish Now</Button></>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

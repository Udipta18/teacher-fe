"use client";

import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";

const FILES = [
  { name: "Algebra Worksheet #3", meta: "Maths · Form 3 · Feb 10, 2026 · PDF · 1.2 MB", iconBg: "#FEE2E2", downloads: "8 downloads" },
  { name: "Cell Biology Notes", meta: "Science · Form 4 · Feb 8, 2026 · PDF · 2.4 MB", iconBg: "#D5F5F3", downloads: "10 downloads" },
  { name: "Essay Writing Guide", meta: "English · Form 2 · Feb 6, 2026 · PDF · 800 KB", iconBg: "#EDE9FE", downloads: "6 downloads" },
  { name: "Periodic Table Reference", meta: "Chemistry · Form 5 · Feb 4, 2026 · PDF · 1.8 MB", iconBg: "#FEF3C7", downloads: "5 downloads" },
  { name: "World War II Timeline", meta: "History · Form 3 · Feb 2, 2026 · PDF · 3.1 MB", iconBg: "#DBEAFE", downloads: "7 downloads" },
];

export default function HomeworkPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <Badge variant="red" className="py-1.5 px-3.5 cursor-pointer text-[11px]">All Classes</Badge>
          <Badge variant="gray" className="py-1.5 px-3.5 cursor-pointer text-[11px]">Maths</Badge>
          <Badge variant="gray" className="py-1.5 px-3.5 cursor-pointer text-[11px]">Science</Badge>
          <Badge variant="gray" className="py-1.5 px-3.5 cursor-pointer text-[11px]">English</Badge>
        </div>
        <Button variant="teacher">📤 Upload File</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          {FILES.slice(0, 3).map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-[14px] p-3.5 px-4 flex items-center gap-3.5 shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] shrink-0" style={{ background: f.iconBg }}>📄</div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-extrabold">{f.name}</div>
                <div className="text-[11px] text-[var(--sub)] font-semibold mt-0.5">{f.meta}</div>
                <div className="mt-1"><Badge variant="blue">{f.downloads}</Badge></div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="ghost" size="sm">✏️</Button>
                <Button variant="danger" size="sm">🗑️</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {FILES.slice(3).map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-[14px] p-3.5 px-4 flex items-center gap-3.5 shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] shrink-0" style={{ background: f.iconBg }}>📄</div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-extrabold">{f.name}</div>
                <div className="text-[11px] text-[var(--sub)] font-semibold mt-0.5">{f.meta}</div>
                <div className="mt-1"><Badge variant="blue">{f.downloads}</Badge></div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="ghost" size="sm">✏️</Button>
                <Button variant="danger" size="sm">🗑️</Button>
              </div>
            </div>
          ))}
          <div className="border-2 border-dashed border-[var(--border)] rounded-[14px] p-7 text-center cursor-pointer hover:border-primary transition-colors">
            <div className="text-[28px] mb-2">📤</div>
            <div className="font-extrabold text-[var(--sub)]">Upload New File</div>
            <div className="text-[11px] text-[var(--sub)] mt-1">PDF, DOC, PPT up to 10MB</div>
          </div>
        </div>
      </div>
    </>
  );
}

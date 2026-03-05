"use client";

import { Fragment } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "@/components/ui";
import { DAYS, TIMES, SCHEDULE_CLASSES } from "@/lib/constants";

export default function SchedulePage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">← Prev Week</Button>
          <Button variant="primary" size="sm">Feb 10–15, 2026</Button>
          <Button variant="outline" size="sm">Next Week →</Button>
        </div>
        <Button variant="teacher">+ Add Class</Button>
      </div>
      <Card className="mb-5">
        <CardBody className="p-3">
          <div
            className="grid border border-[var(--border)] rounded-[var(--radius)] overflow-hidden"
            style={{ gridTemplateColumns: "60px repeat(6, 1fr)" }}
          >
            {DAYS.map((d) => (
              <div key={d} className="bg-[#FAFAFA] py-2.5 px-2 text-center text-[11px] font-extrabold text-[var(--sub)] border-b border-r border-[var(--border)]">
                {d}
              </div>
            ))}
            {TIMES.map((t, ti) => (
              <Fragment key={ti}>
                <div className="bg-[#FAFAFA] py-2 px-1.5 text-right text-[10px] text-[var(--sub)] font-bold border-r border-b border-[var(--border)]">
                  {t}
                </div>
                {[1, 2, 3, 4, 5, 6].map((di) => {
                  const cls = SCHEDULE_CLASSES.find((c) => c.day === di && c.time === ti);
                  return (
                    <div
                      key={`${di}-${ti}`}
                      className="border-r border-b border-[var(--border)] p-1 min-h-[52px] bg-white"
                    >
                      {cls && (
                        <div className="rounded-lg p-1.5 h-full cursor-pointer hover:opacity-85" style={{ background: cls.color }}>
                          <div className="text-[10px] font-extrabold" style={{ color: cls.tc }}>{cls.name}</div>
                          <div className="text-[9px] opacity-70" style={{ color: cls.tc }}>{cls.sub}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader><CardTitle>📋 All Scheduled Classes</CardTitle></CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subject</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Day</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Time</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Students</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Room</th>
                <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { subject: "📐 Mathematics", day: "Mon, Tue, Thu", time: "9:00 – 10:30 AM", students: "8 students", room: "Room A2" },
                { subject: "🔬 Science", day: "Tue, Wed, Fri", time: "11:00 – 12:30 PM", students: "10 students", room: "Room B1" },
                { subject: "📖 English", day: "Mon, Wed, Fri", time: "2:00 – 3:30 PM", students: "6 students", room: "Room C3" },
                { subject: "⚗️ Chemistry", day: "Tue, Thu", time: "4:00 – 5:30 PM", students: "5 students", room: "Room B2" },
                { subject: "📜 History", day: "Wed, Sat", time: "10:00 – 11:30 AM", students: "7 students", room: "Room D1" },
              ].map((row) => (
                <tr key={row.subject} className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]">
                  <td className="py-3 px-4 font-extrabold">{row.subject}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{row.day}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{row.time}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{row.students}</td>
                  <td className="py-3 px-4 text-[13px] font-semibold">{row.room}</td>
                  <td className="py-3 px-4"><Button variant="ghost" size="sm">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

"use client";

import { Card, CardHeader, CardTitle, CardBody, Button } from "@/components/ui";

const NOTIFICATIONS = [
  { icon: "✅", iconBg: "#ECFDF5", title: "Exam Submitted – Aisha Rahman", sub: "Algebra Chapter 5 · Score: 90%", time: "5 min ago" },
  { icon: "💳", iconBg: "#FEF3C7", title: "Payment Received – Sara Lee", sub: "RM 80 for February 2026", time: "1 hour ago" },
  { icon: "📁", iconBg: "#EFF6FF", title: "Worksheet Downloaded", sub: "Algebra Worksheet #3 · 8 students downloaded", time: "2 hours ago" },
  { icon: "🚨", iconBg: "#FEE2E2", title: "Payment Overdue – Mohamed Zain", sub: "RM 120 was due January 15", time: "Yesterday" },
  { icon: "📝", iconBg: "#F5F3FF", title: "New Exam Submitted – Preethi Nair", sub: "Biology Quiz · Score: 80%", time: "Yesterday" },
];

export default function NotificationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🔔 All Notifications</CardTitle>
        <Button variant="ghost" size="sm">Mark all read</Button>
      </CardHeader>
      <CardBody className="py-2 px-5">
        {NOTIFICATIONS.map((n) => (
          <div key={n.title} className="flex gap-3 py-3 border-b border-[var(--border)] last:border-0">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base shrink-0" style={{ background: n.iconBg }}>{n.icon}</div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-extrabold">{n.title}</div>
              <div className="text-[11px] text-[var(--sub)] font-semibold">{n.sub}</div>
            </div>
            <div className="text-[10px] text-[var(--sub)] shrink-0 pt-0.5">{n.time}</div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

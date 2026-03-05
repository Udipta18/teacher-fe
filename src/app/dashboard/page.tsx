"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";

export default function DashboardPage() {
  const { user } = useAuth();
  const isTeacher = user?.role === "teacher";

  if (isTeacher) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <StatCard icon="👥" num="24" label="Total Students" change="↑ 3 this month" changeUp />
          <StatCard icon="📅" num="18" label="Classes This Week" change="↑ 2 from last week" changeUp />
          <StatCard icon="💳" num="RM 2,840" label="Collected This Month" change="↓ 3 pending" changeUp={false} />
          <StatCard icon="📝" num="5" label="Active Exams" change="↑ Avg 74%" changeUp variant="purple" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5 mb-5">
          <Card>
            <CardHeader>
              <CardTitle>📅 Today&apos;s Classes</CardTitle>
              <Link href="/dashboard/schedule"><Button variant="outline" size="sm">View All</Button></Link>
            </CardHeader>
            <CardBody noPadding>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                      <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Time</th>
                      <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subject</th>
                      <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Students</th>
                      <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Room</th>
                      <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] font-semibold">
                    <tr className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]"><td className="py-3 px-4">9:00 – 10:30</td><td className="py-3 px-4 font-extrabold">📐 Mathematics</td><td className="py-3 px-4">8 students</td><td className="py-3 px-4">Room A2</td><td className="py-3 px-4"><Badge variant="green">✓ Done</Badge></td></tr>
                    <tr className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]"><td className="py-3 px-4">11:00 – 12:30</td><td className="py-3 px-4 font-extrabold">🔬 Science</td><td className="py-3 px-4">10 students</td><td className="py-3 px-4">Room B1</td><td className="py-3 px-4"><Badge variant="blue">▶ Now</Badge></td></tr>
                    <tr className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]"><td className="py-3 px-4">2:00 – 3:30</td><td className="py-3 px-4 font-extrabold">📖 English</td><td className="py-3 px-4">6 students</td><td className="py-3 px-4">Room C3</td><td className="py-3 px-4"><Badge variant="gray">Upcoming</Badge></td></tr>
                    <tr className="hover:bg-[#FAFBFF]"><td className="py-3 px-4">4:00 – 5:30</td><td className="py-3 px-4 font-extrabold">⚗️ Chemistry</td><td className="py-3 px-4">5 students</td><td className="py-3 px-4">Room B2</td><td className="py-3 px-4"><Badge variant="gray">Upcoming</Badge></td></tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>⚠️ Pending Payments</CardTitle>
              <Link href="/dashboard/payments"><Button variant="outline" size="sm">View All</Button></Link>
            </CardHeader>
            <CardBody className="py-2 px-3">
              <NotifRow icon="⏳" iconBg="#FEF3C7" title="Rajan Kumar" sub="RM 100 · Due Feb 15" action={<Button size="sm" variant="success">Mark Paid</Button>} />
              <NotifRow icon="🚨" iconBg="#FEE2E2" title="Mohamed Zain" sub="RM 120 · OVERDUE" action={<Button size="sm" variant="danger">Remind</Button>} />
              <NotifRow icon="⏳" iconBg="#FEF3C7" title="Kavitha Raj" sub="RM 80 · Due Feb 18" action={<Button size="sm" variant="success">Mark Paid</Button>} />
            </CardBody>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>🏆 Recent Exam Results</CardTitle>
              <Link href="/dashboard/results"><Button variant="outline" size="sm">View All</Button></Link>
            </CardHeader>
            <CardBody>
              <BarRow label="Mathematics" pct={85} />
              <BarRow label="Science" pct={72} />
              <BarRow label="English" pct={68} />
              <BarRow label="Chemistry" pct={79} />
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>🔔 Notifications</CardTitle></CardHeader>
            <CardBody className="py-2 px-4">
              <NotifRow icon="✅" iconBg="#ECFDF5" title="Exam Submitted" sub="Aisha completed Algebra Test" time="5m" />
              <NotifRow icon="💳" iconBg="#FEF3C7" title="Payment Received" sub="Sara Lee paid RM 80" time="1h" />
              <NotifRow icon="📁" iconBg="#EFF6FF" title="Worksheet Downloaded" sub="8 students downloaded Algebra #3" time="2h" />
            </CardBody>
          </Card>
        </div>
      </>
    );
  }

  // Student dashboard
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard icon="📚" num="3" label="My Subjects" change="Maths, Science, English" changeUp variant="teal" />
        <StatCard icon="📅" num="3" label="Classes Today" change="Next: Science at 11am" changeUp variant="purple" />
        <StatCard icon="💳" num="✅ Paid" label="February Fee" change="RM 150 · Feb 2" changeUp variant="green" />
        <StatCard icon="📝" num="1" label="Upcoming Exam" change="English · Feb 15" changeUp={false} variant="red" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5 mb-5">
        <Card>
          <CardHeader>
            <CardTitle>📅 My Schedule Today</CardTitle>
            <Link href="/dashboard/schedule"><Button variant="outline" size="sm">Full Schedule</Button></Link>
          </CardHeader>
          <CardBody noPadding>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
                    <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Time</th>
                    <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subject</th>
                    <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Room</th>
                    <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] font-semibold">
                  <tr className="border-b border-[#F3F4F6]"><td className="py-3 px-4">9:00 – 10:30</td><td className="py-3 px-4 font-bold">📐 Mathematics</td><td className="py-3 px-4">Room A2</td><td className="py-3 px-4"><Badge variant="green">✓ Done</Badge></td></tr>
                  <tr className="border-b border-[#F3F4F6]"><td className="py-3 px-4">11:00 – 12:30</td><td className="py-3 px-4 font-bold">🔬 Science</td><td className="py-3 px-4">Room B1</td><td className="py-3 px-4"><Badge variant="blue">▶ Now</Badge></td></tr>
                  <tr className="hover:bg-[#FAFBFF]"><td className="py-3 px-4">2:00 – 3:30</td><td className="py-3 px-4 font-bold">📖 English</td><td className="py-3 px-4">Room C3</td><td className="py-3 px-4"><Badge variant="gray">Upcoming</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <div className="space-y-3">
          <Card>
            <CardHeader><CardTitle>🏆 My Latest Results</CardTitle></CardHeader>
            <CardBody>
              <BarRow label="Algebra" pct={90} />
              <BarRow label="Biology" pct={75} />
              <BarRow label="English" pct={85} />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📁 New Homework</CardTitle>
              <Link href="/dashboard/homework"><Button variant="ghost" size="sm">See All</Button></Link>
            </CardHeader>
            <CardBody className="py-2 px-3">
              <NotifRow icon="📄" iconBg="#FEE2E2" title="Algebra Worksheet #3" sub="Maths · Feb 10" action={<Button size="sm" variant="outline">⬇️</Button>} />
              <NotifRow icon="📄" iconBg="#D5F5F3" title="Cell Biology Notes" sub="Science · Feb 8" action={<Button size="sm" variant="outline">⬇️</Button>} />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

function StatCard({
  icon,
  num,
  label,
  change,
  changeUp,
  variant = "red",
}: {
  icon: string;
  num: string;
  label: string;
  change: string;
  changeUp: boolean;
  variant?: "red" | "teal" | "green" | "purple";
}) {
  const afterBg = { red: "var(--teacher)", teal: "var(--student)", green: "var(--green)", purple: "var(--purple)" }[variant];
  return (
    <div
      className="bg-white rounded-[var(--radius)] p-5 shadow-[var(--shadow)] flex flex-col gap-2 relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <div className="absolute -right-2.5 -top-2.5 w-[70px] h-[70px] rounded-full opacity-[0.08]" style={{ background: afterBg }} />
      <div className="text-2xl">{icon}</div>
      <div className="text-3xl font-black leading-none">{num}</div>
      <div className="text-xs text-[var(--sub)] font-bold">{label}</div>
      <div className={`text-[11px] font-bold mt-0.5 ${changeUp ? "text-[var(--green)]" : "text-[var(--red)]"}`}>{change}</div>
    </div>
  );
}

function NotifRow({
  icon,
  iconBg,
  title,
  sub,
  time,
  action,
}: {
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
  time?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 py-3 border-b border-[var(--border)] last:border-0">
      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base shrink-0" style={{ background: iconBg }}>{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-extrabold">{title}</div>
        <div className="text-[11px] text-[var(--sub)] font-semibold">{sub}</div>
      </div>
      {time && <div className="text-[10px] text-[var(--sub)] shrink-0 pt-0.5">{time}</div>}
      {action && <div className="ml-auto shrink-0">{action}</div>}
    </div>
  );
}

function BarRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="flex items-center gap-2.5 mb-2.5">
      <span className="w-20 text-[11px] font-bold text-[var(--sub)] text-right shrink-0">{label}</span>
      <div className="flex-1 h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] transition-[width] duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-9 text-[11px] font-extrabold text-[var(--text)]">{pct}%</span>
    </div>
  );
}

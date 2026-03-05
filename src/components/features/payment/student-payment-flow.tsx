"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, Button, Badge } from "@/components/ui";

type Step = 1 | 2 | 3 | 4;
type Method = "card" | "fpx" | "ewallet" | "transfer";

export function StudentPaymentFlow() {
  const [showFlow, setShowFlow] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [method, setMethod] = useState<Method>("card");
  const [paid, setPaid] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const goStep = (s: Step) => {
    setStep(s);
    if (s === 4) {
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setSuccess(true);
      }, 2500);
    }
  };

  const completePayment = () => {
    setPaid(true);
    setShowFlow(false);
    setStep(1);
    setSuccess(false);
  };

  if (paid) {
    return (
      <>
        <div className="rounded-[var(--radius)] p-5 px-6 mb-5 flex items-center justify-between gap-4 shadow-[var(--shadow)] bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]">
          <div className="flex items-center gap-4">
            <div className="text-[44px]">✅</div>
            <div>
              <div className="text-[13px] font-extrabold text-[#047857]">MARCH 2026 – FULLY PAID</div>
              <div className="text-[32px] font-black text-[#065F46]">RM 150</div>
              <div className="text-xs text-[#047857] mt-0.5">Paid on March 4, 2026 · 3 subjects · Ref: TH-202603-8821</div>
            </div>
          </div>
          <Button variant="outline" size="sm">🧾 Receipt</Button>
        </div>
        <PaymentHistoryTable marchPaid />
      </>
    );
  }

  if (!showFlow) {
    return (
      <>
        <div className="rounded-[var(--radius)] p-5 px-6 mb-5 flex items-center justify-between gap-4 shadow-[var(--shadow)] bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]">
          <div className="flex items-center gap-4">
            <div className="text-[44px]">⚠️</div>
            <div>
              <div className="text-[13px] font-extrabold text-[#92400E]">MARCH 2026 – PAYMENT DUE</div>
              <div className="text-[32px] font-black text-[#78350F]">RM 150</div>
              <div className="text-xs text-[#92400E] mt-0.5">Due by March 15, 2026 · 3 subjects enrolled</div>
            </div>
          </div>
          <Button variant="teacher" className="text-sm py-3 px-7 rounded-[14px] whitespace-nowrap" onClick={() => setShowFlow(true)}>
            💳 Pay Now
          </Button>
        </div>
        <PaymentHistoryTable />
      </>
    );
  }

  return (
    <div className="mb-5">
      <div className="flex justify-center gap-0 mb-6">
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <div key={s} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-[34px] h-[34px] rounded-full border-2 flex items-center justify-center text-[13px] font-black transition-all ${
                s < step ? "bg-[var(--green)] border-[var(--green)] text-white" : s === step ? "bg-[var(--teacher)] border-[var(--teacher)] text-white" : "border-[var(--border)] bg-white text-[var(--sub)]"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            <span className={`text-[10px] font-extrabold whitespace-nowrap ${s <= step ? "text-[var(--teacher)]" : "text-[var(--sub)]"}`}>
              {s === 1 ? "Choose Method" : s === 2 ? "Enter Details" : s === 3 ? "Review & Pay" : "Done"}
            </span>
            {s < 4 && <div className="flex-1 h-0.5 bg-[var(--border)] w-10 mb-5" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>💳 Choose Payment Method</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowFlow(false)}>✕ Cancel</Button>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
              {[
                { id: "card" as const, icon: "💳", name: "Credit / Debit Card", sub: "Visa, Mastercard, Amex" },
                { id: "fpx" as const, icon: "🏦", name: "Online Banking (FPX)", sub: "Maybank, CIMB, RHB & more" },
                { id: "ewallet" as const, icon: "📱", name: "E-Wallet", sub: "Touch 'n Go, GrabPay, Boost" },
                { id: "transfer" as const, icon: "🔄", name: "Bank Transfer", sub: "Manual transfer reference" },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={`border-2 rounded-2xl p-4 text-left transition-all ${method === m.id ? "border-primary bg-[#F5F3FF] shadow-lg" : "border-[var(--border)] bg-white hover:border-primary hover:shadow-md"}`}
                >
                  <div className="text-2xl mb-2">{m.icon}</div>
                  <div className="text-[13px] font-extrabold mb-0.5">{m.name}</div>
                  <div className="text-[11px] text-[var(--sub)] font-semibold">{m.sub}</div>
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="teacher" onClick={() => goStep(2)}>Continue →</Button>
            </div>
          </CardBody>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <Button variant="ghost" size="sm" onClick={() => goStep(1)}>← Back</Button>
            <CardTitle>💳 Enter Details</CardTitle>
          </CardHeader>
          <CardBody>
            {method === "card" && (
              <>
                <div className="bg-gradient-to-br from-primary to-[#A78BFA] rounded-[18px] p-5 px-6 text-white mb-5 shadow-lg">
                  <div className="text-[11px] opacity-70 tracking-wider mb-3">CARD NUMBER</div>
                  <div className="text-xl font-black tracking-widest mb-4">•••• •••• •••• ••••</div>
                  <div className="flex justify-between items-end">
                    <div><div className="text-[9px] opacity-60">CARD HOLDER</div><div className="text-[13px] font-extrabold">YOUR NAME</div></div>
                    <div><div className="text-[9px] opacity-60">EXPIRES</div><div className="text-[13px] font-extrabold">MM/YY</div></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="text-[11px] font-extrabold text-[var(--sub)] block mb-1">CARD NUMBER</label><input placeholder="1234 5678 9012 3456" className="w-full py-2.5 px-3.5 rounded-[10px] border-[1.5px] border-[var(--border)] font-nunito text-[13px] outline-none focus:border-primary" /></div>
                  <div><label className="text-[11px] font-extrabold text-[var(--sub)] block mb-1">CARDHOLDER NAME</label><input placeholder="e.g. AISHA RAHMAN" className="w-full py-2.5 px-3.5 rounded-[10px] border-[1.5px] border-[var(--border)] font-nunito text-[13px] outline-none focus:border-primary uppercase" /></div>
                  <div><label className="text-[11px] font-extrabold text-[var(--sub)] block mb-1">EXPIRY DATE</label><input placeholder="MM/YY" className="w-full py-2.5 px-3.5 rounded-[10px] border-[1.5px] border-[var(--border)] font-nunito text-[13px] outline-none focus:border-primary" /></div>
                  <div><label className="text-[11px] font-extrabold text-[var(--sub)] block mb-1">CVV / CVC</label><input type="password" placeholder="•••" className="w-full py-2.5 px-3.5 rounded-[10px] border-[1.5px] border-[var(--border)] font-nunito text-[13px] outline-none focus:border-primary" /></div>
                </div>
                <div className="bg-[#EFF6FF] rounded-[10px] p-2.5 px-3.5 mt-3.5 flex gap-2.5 items-center">
                  <span className="text-lg">🔒</span>
                  <span className="text-[11px] text-[#1D4ED8] font-bold">Your payment is secured with 256-bit SSL encryption. We never store your card details.</span>
                </div>
              </>
            )}
            {method !== "card" && <p className="text-[var(--sub)] font-semibold">You will be redirected to complete payment.</p>}
            <div className="flex justify-end mt-4">
              <Button variant="teacher" onClick={() => goStep(3)}>Review Payment →</Button>
            </div>
          </CardBody>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <Button variant="ghost" size="sm" onClick={() => goStep(2)}>← Back</Button>
            <CardTitle>🧾 Review Your Payment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="bg-[var(--bg)] rounded-[14px] p-4 mb-4">
              <div className="text-[11px] font-extrabold text-[var(--sub)] tracking-wider mb-3">ORDER SUMMARY</div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]"><span className="text-[13px] text-[var(--sub)]">📐 Mathematics · March 2026</span><span className="font-extrabold">RM 50.00</span></div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]"><span className="text-[13px] text-[var(--sub)]">🔬 Science · March 2026</span><span className="font-extrabold">RM 50.00</span></div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]"><span className="text-[13px] text-[var(--sub)]">📖 English · March 2026</span><span className="font-extrabold">RM 50.00</span></div>
              <div className="flex justify-between py-2.5 pt-2.5"><span className="text-sm font-black">Total</span><span className="text-xl font-black text-[var(--teacher)]">RM 150.00</span></div>
            </div>
            <Button variant="teacher" className="w-full py-3.5 text-[15px] rounded-[14px]" onClick={() => goStep(4)}>🔒 Confirm & Pay RM 150.00</Button>
          </CardBody>
        </Card>
      )}

      {step === 4 && (
        <Card className="max-w-[500px] mx-auto">
          <CardBody className="text-center py-12 px-8">
            {processing && (
              <>
                <div className="text-[56px] mb-4 inline-block animate-spin">⏳</div>
                <div className="text-lg font-black mb-2">Processing Payment...</div>
                <div className="text-[13px] text-[var(--sub)]">Please wait, do not close this window.</div>
              </>
            )}
            {success && !processing && (
              <>
                <div className="text-[72px] mb-4">✅</div>
                <div className="text-[22px] font-black text-[#065F46] mb-1.5">Payment Successful!</div>
                <div className="text-[32px] font-black text-[var(--teacher)] mb-2">RM 150.00</div>
                <div className="text-[13px] text-[var(--sub)] mb-5">March 2026 · 3 subjects · Ref: TH-202603-8821</div>
                <div className="flex gap-2.5 justify-center">
                  <Button variant="outline">⬇️ Download Receipt</Button>
                  <Button variant="teacher" onClick={completePayment}>Done →</Button>
                </div>
              </>
            )}
          </CardBody>
        </Card>
      )}

      {step < 4 && <PaymentHistoryTable />}
    </div>
  );
}

function PaymentHistoryTable({ marchPaid }: { marchPaid?: boolean }) {
  const rows = [
    { month: "March 2026", amount: "RM 150", subjects: "3 subjects", method: marchPaid ? "Card" : "–", paidDate: marchPaid ? "Mar 4, 2026" : "–", status: marchPaid ? "paid" : "pending", action: marchPaid ? "Receipt" : "Pay Now" },
    { month: "February 2026", amount: "RM 150", subjects: "3 subjects", method: "Card", paidDate: "Feb 2, 2026", status: "paid" as const, action: "Receipt" },
    { month: "January 2026", amount: "RM 150", subjects: "3 subjects", method: "FPX", paidDate: "Jan 4, 2026", status: "paid" as const, action: "Receipt" },
  ];
  return (
    <Card>
      <CardHeader><CardTitle>💳 Payment History</CardTitle></CardHeader>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FAFAFA] border-b border-[var(--border)]">
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Month</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Amount</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Subjects</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Method</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Paid Date</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]">Status</th>
              <th className="py-2.5 px-4 text-left text-[10px] font-extrabold uppercase text-[var(--sub)]"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.month} className="border-b border-[#F3F4F6] hover:bg-[#FAFBFF]">
                <td className="py-3 px-4 font-bold">{r.month}</td>
                <td className="py-3 px-4 font-bold">{r.amount}</td>
                <td className="py-3 px-4 text-[13px] font-semibold">{r.subjects}</td>
                <td className="py-3 px-4 text-[13px] font-semibold">{r.method}</td>
                <td className="py-3 px-4 text-[13px] font-semibold">{r.paidDate}</td>
                <td className="py-3 px-4">{r.status === "paid" ? <Badge variant="green">✅ Paid</Badge> : <Badge variant="amber">⏳ Pending</Badge>}</td>
                <td className="py-3 px-4"><Button variant="ghost" size="sm">{r.action}</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

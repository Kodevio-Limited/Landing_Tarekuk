"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionPill from "@/components/shared/SectionPill";
import Reveal from "@/components/shared/Reveal";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How long does a money transfer take?",
    a: "Transfers are typically completed within minutes, depending on the destination country and payout method. In some cases, it may take a few hours or up to one business day due to bank processing times, security checks, or network conditions.",
  },
  {
    q: "What is 'Pay Later' and how does it work?",
    a: "Pay Later lets you send money home today and repay on a date that works for you — in full on your next salary day, or spread over 4, 6, 8 or 12 monthly instalments. Your family gets the money immediately either way.",
  },
  {
    q: "How much does Tarekuk charge?",
    a: "Your fee depends only on the repayment term you choose — never on how much you send. You'll always see the exact total repayable before you confirm, with no hidden charges.",
  },
  {
    q: "Who can use Pay Later?",
    a: "Pay Later is available to eligible UK residents aged 18+. Check your available limit in seconds within the app — checking eligibility won't affect your credit score.",
  },
  {
    q: "Is my money safe with Tarekuk?",
    a: "Yes. We use bank-grade encryption and hold funds with regulated partners. Every transfer is tracked end-to-end, and your recipient is notified at every step.",
  },
  {
    q: "Which countries can I send money to?",
    a: "We support 170+ countries and territories, with more added regularly. Popular corridors include Bangladesh, Pakistan, India, Nigeria, Poland and Romania.",
  },
  {
    q: "When do I need to repay?",
    a: "If you choose Pay in Full, repayment is collected on your next salary day. With monthly plans, fixed instalments are collected on the same date each month — and you can repay early at any time with no penalty.",
  },
  {
    q: "What happens if I can't repay on time?",
    a: "We'll always remind you before a due date. If something changes, contact our support team — we'll work with you on a plan. We never charge surprise late fees.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl outline outline-1 transition-all duration-500 ${
        open
          ? "bg-yellow-50 outline-yellow-400 shadow-[0_14px_36px_-14px_rgba(250,204,21,0.45)]"
          : "bg-white outline-transparent hover:bg-yellow-50/50 hover:outline-yellow-200"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
      >
        <span className="text-lg font-normal leading-7 text-black sm:text-2xl">{item.q}</span>
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-400 ${
            open ? "rotate-45 bg-yellow-400 text-zinc-900" : "bg-yellow-100 text-zinc-700"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-7 text-base leading-7 text-stone-500 sm:px-8 sm:text-lg sm:leading-8">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full overflow-hidden py-14 sm:py-16">
      <div className="aurora animate-aurora-slow pointer-events-none absolute -right-24 top-24 -z-[1] size-[340px] bg-yellow-200/30" aria-hidden="true" />
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-16 px-4 sm:px-8">
          <Reveal className="flex w-full max-w-[486px] flex-col items-center gap-5">
            <SectionPill>FAQ</SectionPill>
            <SectionHeading>
              Got Questions? <span className="font-medium">We&apos;ve Got </span>
              <span className="text-gradient-gold font-medium">Answers</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={1} className="w-full">
            <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-x-14">
              {[FAQ_ITEMS.slice(0, 4), FAQ_ITEMS.slice(4)].map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-5">
                  {column.map((item, i) => {
                    const idx = colIdx * 4 + i;
                    return (
                      <FaqItem
                        key={item.q}
                        item={item}
                        open={openIndex === idx}
                        onToggle={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

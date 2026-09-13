"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import SectionPill from "@/components/ui/SectionPill";

const PRICING_CARDS = [
  {
    id: 1,
    title: "Pay in Full on Salary Day",
    subtitle: "Repay the full amount on your next salary day.",
    type: "full",
    rows: [
      { label: "Send Amount", value: "£ 200.00", isYellow: false },
      { label: "Fee", value: "£ 4.99", isYellow: true },
    ],
    totalLabel: "Total Repayable",
    totalValue: "£ 204.99",
    dateLabel: "Repayment Date",
    dateValue: "28 July 2026",
  },
  {
    id: 2,
    title: "Monthly EMI - 4 Months",
    subtitle: "4 equal monthly payments",
    type: "emi",
    rows: [
      { label: "Monthly Payments", value: "£ 53.75", isYellow: true },
      { label: "Transfer Fee", value: "£ 3.75", isYellow: true },
    ],
    totalLabel: "Total Repayable",
    totalValue: "£ 215.99",
  },
  {
    id: 3,
    title: "Monthly EMI - 6 Months",
    subtitle: "6 equal monthly payments",
    type: "emi",
    rows: [
      { label: "Monthly Payments", value: "£ 37.00", isYellow: true },
      { label: "Transfer Fee", value: "£ 3.75", isYellow: true },
    ],
    totalLabel: "Total Repayable",
    totalValue: "£ 222.00",
  },
  {
    id: 4,
    title: "Monthly EMI - 8 Months",
    subtitle: "8 equal monthly payments",
    type: "emi",
    rows: [
      { label: "Monthly Payments", value: "£ 28.75", isYellow: true },
      { label: "Transfer Fee", value: "£ 3.75", isYellow: true },
    ],
    totalLabel: "Total Repayable",
    totalValue: "£ 230.00",
  },
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="pricing" className="w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto flex w-[1768px] max-w-full flex-col items-center gap-12 px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
            <SectionPill>Pricing</SectionPill>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-light italic leading-tight text-black sm:text-5xl lg:text-[52px]">
                One simple <span className="font-medium not-italic text-black">price.</span>
              </h2>
              <p className="mt-1 text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-[52px]">
                You choose the time.
              </p>
            </div>
            <p className="mt-2 text-base font-normal text-[#737373] sm:text-lg">
              Your fee depends only on the repayment term -not how much you send.
            </p>
          </div>
        </Reveal>

        {/* 4 Pricing Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_CARDS.map((card, i) => {
            const isActive = activeIndex === i;

            return (
              <Reveal key={card.id} delay={i + 1}>
                <div
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex h-[310px] w-full cursor-pointer select-none flex-col justify-between rounded-[22px] p-5 sm:p-6 transition-all duration-300 ease-out ${
                    isActive
                      ? "border-2 border-[#FFC107] bg-gradient-to-b from-[#FFFDF5] to-[#FFF6D6] shadow-[0_12px_32px_rgba(255,193,7,0.22)] scale-[1.02] z-10"
                      : "border border-gray-200/80 bg-white shadow-sm hover:border-amber-300 hover:shadow-md"
                  }`}
                >
                  {/* Top Title & Subtitle */}
                  <div className="flex flex-col gap-1 text-left">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-[21px]">
                      {card.title}
                    </h3>
                    <p className="text-xs font-normal text-gray-400 sm:text-sm">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Rows */}
                  <div className="flex flex-col gap-3 text-sm">
                    {card.rows.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between text-gray-500"
                      >
                        <span>{row.label}</span>
                        <span
                          className={`font-semibold ${
                            row.isYellow ? "text-primary" : "text-gray-900"
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider & Total Footer */}
                  <div className="flex flex-col gap-3">
                    {card.type === "full" ? (
                      <>
                        <div className="h-px w-full bg-gray-300/70" />
                        <div className="flex items-center justify-between text-base font-bold">
                          <span className="text-black">{card.totalLabel}</span>
                          <span className="text-primary">{card.totalValue}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{card.dateLabel}</span>
                          <span>{card.dateValue}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between text-base font-bold">
                          <span className="text-gray-500 font-medium text-sm">{card.totalLabel}</span>
                          <span className="text-primary">{card.totalValue}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionPill from "@/components/shared/SectionPill";

const ANSWER =
  "Transfers are typically completed within minutes, depending on the destination country and payout method. In some cases, it may take a few hours or up to one business day due to bank processing times, security checks, or network conditions.";

const FAQ_ITEMS = [
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
  "How long does a money transfer take?",
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={`relative w-[862px] text-left overflow-hidden rounded-[5px] ${
        open
          ? "h-56 bg-yellow-50 outline outline-2 outline-offset-[-2px] outline-yellow-400"
          : "h-20 bg-white"
      }`}
    >
      <div className="absolute left-[27px] top-[23px] text-left justify-start text-black text-3xl font-normal font-['Poppins'] leading-10">
        {question}
      </div>
      <div className="absolute right-6 top-[23px] flex size-8 items-center justify-center">
        <div className="relative size-5">
          {!open && (
            <div className="absolute left-1/2 top-0 h-5 w-[2.67px] -translate-x-1/2 bg-black" />
          )}
          <div className="absolute left-0 top-1/2 h-[2.67px] w-5 -translate-y-1/2 bg-black" />
        </div>
      </div>
      {open && (
        <div className="absolute left-[27px] top-[91px] w-[809px] justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-8">
          {answer}
        </div>
      )}
    </button>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <div className="w-[1763px] max-w-full inline-flex flex-col justify-start items-center gap-20">
          <div className="w-[486px] flex flex-col justify-start items-center gap-5">
            <SectionPill>FAQ</SectionPill>
            <SectionHeading>
              Got Questions? <span className="font-medium">We&apos;ve Got </span>
              <span className="font-medium text-yellow-400">Answers</span>
            </SectionHeading>
          </div>
          <div className="self-stretch shadow-[0px_4px_3.799999952316284px_0px_rgba(0,0,0,0.06)] flex flex-col justify-start items-start gap-7">
            {[0, 1, 2, 3].map((row) => (
              <div
                key={row}
                className="self-stretch inline-flex justify-between items-center gap-10"
              >
                {[0, 1].map((col) => {
                  const idx = row * 2 + col;
                  const open = openIndex === idx;
                  return (
                    <FaqItem
                      key={idx}
                      question={FAQ_ITEMS[idx]}
                      answer={ANSWER}
                      open={open}
                      onToggle={() =>
                        setOpenIndex((cur) => (cur === idx ? null : idx))
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

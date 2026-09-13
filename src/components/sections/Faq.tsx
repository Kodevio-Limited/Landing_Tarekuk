"use client";

import SectionPill from "@/components/ui/SectionPill";
import Reveal from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS: { id: string; q: string; a: string }[] = [
  {
    id: "item-1",
    q: "How long does a money transfer take?",
    a: "Transfers are typically completed within minutes, depending on the destination country and payout method. In some cases, it may take a few hours or up to one business day due to bank processing times, security checks, or network conditions.",
  },
  {
    id: "item-2",
    q: "What is 'Pay Later' and how does it work?",
    a: "Pay Later lets you send money home today and repay on a date that works for you — in full on your next salary day, or spread over 4, 6, 8 or 12 monthly instalments. Your family gets the money immediately either way.",
  },
  {
    id: "item-3",
    q: "How much does FamilySent charge?",
    a: "Your fee depends only on the repayment term you choose — never on how much you send. You'll always see the exact total repayable before you confirm, with no hidden charges.",
  },
  {
    id: "item-4",
    q: "Who can use Pay Later?",
    a: "Pay Later is available to eligible UK residents aged 18+. Check your available limit in seconds within the app — checking eligibility won't affect your credit score.",
  },
  {
    id: "item-5",
    q: "Is my money safe with FamilySent?",
    a: "Yes. We use bank-grade encryption and hold funds with regulated partners. Every transfer is tracked end-to-end, and your recipient is notified at every step.",
  },
  {
    id: "item-6",
    q: "Which countries can I send money to?",
    a: "We support 170+ countries and territories, with more added regularly. Popular corridors include Bangladesh, Pakistan, India, Nigeria, Poland and Romania.",
  },
  {
    id: "item-7",
    q: "When do I need to repay?",
    a: "If you choose Pay in Full, repayment is collected on your next salary day. With monthly plans, fixed instalments are collected on the same date each month — and you can repay early at any time with no penalty.",
  },
  {
    id: "item-8",
    q: "What happens if I can't repay on time?",
    a: "We'll always remind you before a due date. If something changes, contact our support team — we'll work with you on a plan. We never charge surprise late fees.",
  },
];

export default function Faq() {
  const col1 = FAQ_ITEMS.slice(0, 4);
  const col2 = FAQ_ITEMS.slice(4, 8);

  return (
    <section id="faq" className="relative w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto flex w-[1768px] max-w-full flex-col items-center gap-14 px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
            <SectionPill>FAQ</SectionPill>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-light italic leading-tight text-black sm:text-5xl lg:text-[52px]">
                Got Questions?
              </h2>
              <p className="mt-1 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-[52px]">
                We&apos;ve Got <span className="text-primary">Answers</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* 2-Column FAQ Grid using Shadcn Accordion */}
        <Reveal delay={1} className="w-full">
          <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
            {/* Column 1 */}
            <Accordion
              type="multiple"
              defaultValue={["item-2"]}
              className="flex flex-col gap-4"
            >
              {col1.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Column 2 */}
            <Accordion
              type="multiple"
              defaultValue={["item-6"]}
              className="flex flex-col gap-4"
            >
              {col2.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

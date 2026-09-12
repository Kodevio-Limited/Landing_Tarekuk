import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionPill from "@/components/shared/SectionPill";

const EMI_PLANS = [
  { months: 4, monthly: "53.75", total: "£ 215.99" },
  { months: 6, monthly: "37.00", total: "£ 222.00" },
  { months: 8, monthly: "28.75", total: "£ 230.00" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="inline-flex w-[1768px] max-w-full flex-col items-center justify-center gap-10">
          <Reveal>
            <div className="flex w-[486px] max-w-full flex-col items-center justify-center gap-5">
              <SectionPill>Pricing</SectionPill>
              <SectionHeading>
                One simple <span className="font-medium">price.</span>
                <br />
                You choose the time.
              </SectionHeading>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="w-[535px] max-w-full text-center text-lg font-normal leading-7 text-stone-500">
              Your fee depends only on the repayment term — not how much you send.
            </div>
          </Reveal>
          <div className="inline-flex self-stretch items-center justify-center gap-8 max-lg:flex-col">
            {/* Card 1 — Pay in Full */}
            <Reveal delay={1}>
              <div className="card-hover group relative size-96 max-w-[90vw] overflow-hidden rounded-[19px] bg-white outline outline-1 outline-offset-[-1px] outline-yellow-400">
                <div className="absolute left-[-12px] top-[-182px] h-80 w-96 opacity-40 bg-yellow-400/40 blur-[85.50px]" />
                <div className="absolute left-[6px] top-[280px] size-96 opacity-40 bg-orange-500/40 blur-[90.75px]" />
                <div className="absolute left-[30px] top-[26px] flex w-72 max-w-[calc(100%-60px)] flex-col items-start justify-start gap-1.5">
                  <div className="text-2xl font-medium leading-8 text-zinc-800">Pay in Full on Salary Day</div>
                  <div className="w-80 max-w-full text-base font-normal leading-6 text-neutral-400">Repay the full amount on your next salary day.</div>
                </div>
                <div className="absolute left-[30px] top-[135px] flex w-[324px] max-w-[calc(100%-60px)] flex-col items-start justify-start gap-5">
                  <div className="flex self-stretch items-center justify-between">
                    <div className="text-base font-medium leading-6 text-stone-500">Send Amount</div>
                    <div><span className="text-base font-medium leading-6 text-yellow-400">£</span><span className="text-base font-medium leading-6 text-stone-500"> </span><span className="text-base font-medium leading-6 text-zinc-800">200.00</span></div>
                  </div>
                  <div className="flex self-stretch items-center justify-between">
                    <div className="text-base font-medium leading-6 text-stone-500">Fee</div>
                    <div><span className="text-base font-medium leading-6 text-yellow-400">£</span><span className="text-base font-medium leading-6 text-stone-500"> </span><span className="text-base font-medium leading-6 text-zinc-800">4.99</span></div>
                  </div>
                </div>
                <div className="absolute left-[18px] top-[221px] h-0 w-[348px] max-w-[calc(100%-36px)] outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
                <div className="absolute left-[30px] top-[239px] flex w-[324px] max-w-[calc(100%-60px)] flex-col items-start justify-start gap-3.5">
                  <div className="flex self-stretch items-center justify-between">
                    <div className="text-lg font-medium leading-7 text-black">Total Repayable</div>
                    <div className="text-lg font-medium leading-7 text-yellow-400">£ 204.99</div>
                  </div>
                  <div className="flex self-stretch items-center justify-between">
                    <div className="text-base font-medium leading-6 text-neutral-400">Repayment Date</div>
                    <div className="text-base font-medium leading-6 text-neutral-400">28 July 2026</div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              </div>
            </Reveal>
            {/* EMI cards */}
            {EMI_PLANS.map((plan, i) => (
              <Reveal key={plan.months} delay={(i + 2) as 2 | 3 | 4}>
                <div className="card-hover group relative size-96 max-w-[90vw] overflow-hidden rounded-[19px] bg-white shadow-[0px_0px_3.5px_0px_rgba(0,0,0,0.20)]">
                  <div className="absolute left-[30px] top-[26px] flex w-72 max-w-[calc(100%-60px)] flex-col items-start justify-start gap-1.5">
                    <div className="text-2xl font-medium leading-8 text-zinc-800">Monthly EMI - {plan.months} Months</div>
                    <div className="w-80 max-w-full text-base font-normal leading-6 text-neutral-400">{plan.months} equal monthly payments</div>
                  </div>
                  <div className="absolute left-[30px] top-[149px] flex w-[324px] max-w-[calc(100%-60px)] flex-col items-start justify-start gap-5">
                    <div className="flex self-stretch items-center justify-between">
                      <div className="text-base font-medium leading-6 text-stone-500">Monthly Payments</div>
                      <div><span className="text-base font-medium leading-6 text-yellow-400">£</span><span className="text-base font-medium leading-6 text-stone-500"> </span><span className="text-base font-medium leading-6 text-zinc-800">{plan.monthly}</span></div>
                    </div>
                    <div className="flex self-stretch items-center justify-between">
                      <div className="text-base font-medium leading-6 text-stone-500">Transfer Fee</div>
                      <div><span className="text-base font-medium leading-6 text-yellow-400">£</span><span className="text-base font-medium leading-6 text-stone-500"> </span><span className="text-base font-medium leading-6 text-zinc-800">3.75</span></div>
                    </div>
                    <div className="flex self-stretch items-center justify-between">
                      <div className="text-base font-medium leading-6 text-stone-500">Total Repayable</div>
                      <div className="text-base font-medium leading-6 text-yellow-400">{plan.total}</div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/motion/Reveal";
import SectionPill from "@/components/ui/SectionPill";

export default function PayLater() {
  return (
    <section id="pay-later" className="w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto flex w-[1768px] max-w-full flex-col items-center gap-14 px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
            <SectionPill>Pay Later</SectionPill>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-light italic leading-tight text-black sm:text-5xl lg:text-[52px]">
                Send money <span className="font-medium not-italic text-primary">today.</span>
              </h2>
              <p className="mt-1 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[52px]">
                Repay over time.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Check Eligibility */}
          <Reveal delay={1}>
            <div className="group flex h-[430px] w-full select-none flex-col items-center justify-between rounded-[22px] border border-[#FCD34D] bg-[#FFFDF5] p-6 text-center transition-transform duration-500 ease-out hover:scale-[1.02] sm:p-8">
              <div className="flex h-[250px] w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pay-later/card.png"
                  alt="Check eligibility card"
                  className="max-h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold tracking-tight text-black sm:text-[22px]">
                  Check eligibility
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-snug text-[#737373] sm:text-base">
                  See your available limit
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Choose a plan and send */}
          <Reveal delay={2}>
            <div className="group flex h-[430px] w-full select-none flex-col items-center justify-between rounded-[22px] border border-[#FCD34D] bg-[#FFFDF5] p-6 text-center transition-transform duration-500 ease-out hover:scale-[1.02] sm:p-8">
              <div className="flex h-[250px] w-full items-center justify-center">
                <div className="flex w-full max-w-[320px] flex-col rounded-xl bg-white p-4 text-left shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-amber-200/80 transition-transform duration-500 group-hover:scale-105">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-bold text-gray-900">
                      Pay in Full on Salary Day
                    </span>
                    <span className="text-xs text-gray-400">
                      Repay the full amount on your next salary day.
                    </span>
                  </div>

                  <div className="mt-3.5 flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Send Amount</span>
                      <span className="font-medium text-gray-800"><span className="text-primary">£</span> 200.00</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Fee</span>
                      <span className="font-medium text-gray-800"><span className="text-primary">£</span> 4.99</span>
                    </div>
                  </div>

                  <div className="my-2.5 h-px w-full bg-gray-300" />

                  <div className="flex items-center justify-between text-base font-bold">
                    <span className="text-black">Total Repayable</span>
                    <span className="text-primary">£ 204.99</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span>Repayment Date</span>
                    <span>28 July 2026</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold tracking-tight text-black sm:text-[22px]">
                  Choose a plan and send
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-snug text-[#737373] sm:text-base">
                  Select 4, 6, 8 or 12 months
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Repay Monthly */}
          <Reveal delay={3}>
            <div className="group flex h-[430px] w-full select-none flex-col items-center justify-between rounded-[22px] border border-[#FCD34D] bg-[#FFFDF5] p-6 text-center transition-transform duration-500 ease-out hover:scale-[1.02] sm:p-8">
              <div className="flex h-[250px] w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pay-later/pay-later-3.png"
                  alt="Repay Monthly notebook"
                  className="max-h-[220px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold tracking-tight text-black sm:text-[22px]">
                  Repay Monthly
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-snug text-[#737373] sm:text-base">
                  Make clear, fixed monthly payments.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

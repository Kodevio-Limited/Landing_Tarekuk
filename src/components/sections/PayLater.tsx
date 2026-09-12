import Reveal from "@/components/shared/Reveal";

export default function PayLater() {
  return (
    <section id="pay-later" className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="inline-flex w-[1768px] max-w-full flex-col items-center justify-start gap-16">
          <Reveal>
            <div className="flex w-[486px] max-w-full flex-col items-center justify-start gap-5">
              <div className="inline-flex size-auto items-center justify-center gap-2.5 rounded-[75px] px-5 py-3.5 outline outline-8 outline-offset-[-7px] outline-yellow-400">
                <div className="text-center text-lg font-medium leading-7 text-black">Pay Later</div>
              </div>
              <div className="self-stretch text-center">
                <span className="text-5xl font-light leading-[63px] text-black">Send money </span>
                <span className="text-5xl font-medium leading-[63px] text-yellow-400">today. </span>
                <span className="text-5xl font-medium leading-[63px] text-black">Repay over time.</span>
              </div>
            </div>
          </Reveal>
          <div className="inline-flex self-stretch items-center justify-center gap-10 max-lg:flex-col">
            <Reveal delay={1}>
              <div className="card-hover relative h-96 w-[561px] max-w-[90vw] overflow-hidden rounded-[19px] bg-yellow-50 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400">
                <div className="absolute left-[34px] top-[38px] h-60 w-[492.06px] max-w-[calc(100%-68px)] overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 via-slate-500 to-gray-700">
                  <div className="absolute left-[21.71px] top-[21.71px] flex w-28 flex-col items-start justify-start gap-3">
                    <div className="text-base font-normal leading-5 text-gray-200">Available Limit</div>
                    <div className="text-center text-4xl font-semibold leading-[47.28px] text-white">£2,500</div>
                  </div>
                  <div className="absolute left-[432.96px] top-[21.71px] h-11 w-9 bg-gray-300" />
                  <div className="absolute left-[18.09px] top-[126.63px] h-0 w-[457.09px] outline outline-[1.21px] outline-offset-[-0.60px] outline-gray-300" />
                  <div className="absolute left-[21.71px] top-[150.75px] flex w-28 flex-col items-start justify-start gap-3">
                    <div className="text-base font-normal leading-5 text-gray-200">Demo Payment</div>
                    <div className="text-2xl font-semibold leading-8 text-white">£200</div>
                  </div>
                  <div className="absolute left-[344.92px] top-[150.75px] flex w-32 flex-col items-start justify-start gap-3">
                    <div className="text-right text-base font-normal leading-5 text-gray-200">Remaining Limit</div>
                    <div className="text-right text-2xl font-semibold leading-8 text-white">£2,300</div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-[297px] flex w-56 -translate-x-1/2 flex-col items-center justify-start gap-5 text-center">
                  <div className="text-3xl font-medium leading-10 text-black">Check eligibility</div>
                  <div className="text-lg leading-7 text-stone-500">See your available limit</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="card-hover relative h-96 w-[561px] max-w-[90vw] overflow-hidden rounded-[19px] bg-yellow-50 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400">
                <div className="absolute left-1/2 top-[24px] flex h-64 w-96 max-w-[calc(100%-48px)] -translate-x-1/2 flex-col overflow-hidden rounded-xl bg-white px-[15px] pb-4 pt-[13px] shadow-[0px_1px_3.9px_0px_rgba(0,0,0,0.19)] outline outline-2 outline-offset-[-1.90px] outline-yellow-100">
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="text-xl font-medium leading-7 text-zinc-800">Pay in Full on Salary Day</div>
                    <div className="text-xs font-normal leading-4 text-neutral-400">Repay the full amount on your next salary day.</div>
                  </div>
                  <div className="mt-[15px] flex flex-col gap-5 self-stretch">
                    <div className="flex items-center justify-between">
                      <div className="text-base font-medium leading-5 text-neutral-400">Send Amount</div>
                      <div><span className="text-base font-medium leading-5 text-yellow-400">£</span><span className="text-base font-medium leading-5 text-stone-500"> </span><span className="text-base font-medium leading-5 text-zinc-800">200.00</span></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-base font-medium leading-5 text-neutral-400">Fee</div>
                      <div><span className="text-base font-medium leading-5 text-yellow-400">£</span><span className="text-base font-medium leading-5 text-stone-500"> </span><span className="text-base font-medium leading-5 text-zinc-800">4.99</span></div>
                    </div>
                  </div>
                  <div className="mt-3 h-px self-stretch bg-zinc-400" />
                  <div className="mt-2 flex items-center justify-between self-stretch">
                    <div className="text-lg font-medium leading-6 text-black">Total Repayable</div>
                    <div className="text-lg font-medium leading-6 text-yellow-400">£ 204.99</div>
                  </div>
                  <div className="mt-auto flex items-center justify-between self-stretch">
                    <div className="text-base font-medium leading-5 text-neutral-400">Repayment Date</div>
                    <div className="text-base font-medium leading-5 text-neutral-400">28 July 2026</div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-[297px] flex w-56 -translate-x-1/2 flex-col items-center justify-start gap-5 text-center">
                  <div className="text-3xl font-medium leading-10 text-black">Choose a plan and send</div>
                  <div className="text-lg leading-7 text-stone-500">Select 4, 6, 8 or 12 months</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="card-hover relative h-96 w-[561px] max-w-[90vw] overflow-hidden rounded-[19px] bg-yellow-50 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="absolute left-1/2 top-[10px] h-72 w-80 max-w-[calc(100%-40px)] -translate-x-1/2 object-contain" src="/images/pay-later/pay-later-3.png" alt="" loading="lazy" />
                <div className="absolute left-1/2 top-[297px] flex w-56 -translate-x-1/2 flex-col items-center justify-start gap-5 text-center">
                  <div className="text-3xl font-medium leading-10 text-black">Repay Monthly</div>
                  <div className="text-lg leading-7 text-stone-500">Make clear, fixed monthly payments.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

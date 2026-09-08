import SectionHeading from "@/components/shared/SectionHeading";
import SectionPill from "@/components/shared/SectionPill";
import Reveal from "@/components/shared/Reveal";

export default function Pricing() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <div className="w-[1768px] max-w-full inline-flex flex-col justify-center items-center gap-10">
          <Reveal>
            <div className="w-[486px] flex flex-col justify-center items-center gap-5">
              <SectionPill>Pricing</SectionPill>
              <SectionHeading>
                One simple <span className="font-medium">price.
                <br />You choose the time.</span>
              </SectionHeading>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="w-[535px] text-center justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-7">
              Your fee depends only on the repayment term -not how much you send.
            </div>
          </Reveal>
          <div className="self-stretch inline-flex justify-center items-center gap-8">
            <Reveal delay={1}>
              <div className="size-96 relative bg-white rounded-[19px] outline outline-1 outline-offset-[-1px] outline-yellow-400 overflow-hidden card-hover">
                <div className="w-96 h-80 left-[-12px] top-[-182px] absolute opacity-40 bg-yellow-400/40 blur-[85.50px]" />
                <div className="size-96 left-[6px] top-[280px] absolute opacity-40 bg-orange-500/40 blur-[90.75px]" />
                <div className="w-72 left-[30px] top-[26px] absolute inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-zinc-800 text-2xl font-medium font-['Poppins'] leading-8">Pay in Full on Salary Day</div>
                  <div className="w-80 justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">Repay the full amount on your next salary day.</div>
                </div>
                <div className="w-[324px] left-[30px] top-[135px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Send Amount</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">200.00</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Fee</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">4.99</span></div>
                  </div>
                </div>
                <div className="w-[324px] left-[30px] top-[239px] absolute inline-flex flex-col justify-start items-start gap-3.5">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-black text-lg font-medium font-['Satoshi'] leading-7">Total Repayable</div>
                    <div className="justify-start text-yellow-400 text-lg font-medium font-['Satoshi'] leading-7">£ 204.99</div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-6">Repayment Date</div>
                    <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-6">28 July 2026</div>
                  </div>
                </div>
                <div className="w-[348px] h-0 left-[18px] top-[221px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="size-96 relative bg-white rounded-[19px] shadow-[0px_0px_3.5px_0px_rgba(0,0,0,0.20)] overflow-hidden card-hover">
                <div className="w-72 left-[30px] top-[26px] absolute inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-zinc-800 text-2xl font-medium font-['Poppins'] leading-8">Monthly EMI - 4 Months</div>
                  <div className="w-80 justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">4 equal monthly payments</div>
                </div>
                <div className="w-[324px] left-[30px] top-[149px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Monthly Payments</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">53.75</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> 3</span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">.75</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£ 215.99</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="size-96 relative bg-white rounded-[19px] shadow-[0px_0px_3.5px_0px_rgba(0,0,0,0.20)] overflow-hidden card-hover">
                <div className="w-72 left-[30px] top-[26px] absolute inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-zinc-800 text-2xl font-medium font-['Poppins'] leading-8">Monthly EMI - 6 Months</div>
                  <div className="w-80 justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">6 equal monthly payments</div>
                </div>
                <div className="w-[324px] left-[30px] top-[149px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Monthly Payments</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">37.00</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> 3</span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">.75</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£ 222.00</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="size-96 relative bg-white rounded-[19px] shadow-[0px_0px_3.5px_0px_rgba(0,0,0,0.20)] overflow-hidden card-hover">
                <div className="w-72 left-[30px] top-[26px] absolute inline-flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-start text-zinc-800 text-2xl font-medium font-['Poppins'] leading-8">Monthly EMI - 8 Months</div>
                  <div className="w-80 justify-start text-neutral-400 text-base font-normal font-['Poppins'] leading-6">8 equal monthly payments</div>
                </div>
                <div className="w-[324px] left-[30px] top-[149px] absolute inline-flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Monthly Payments</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">28.75</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-6"> 3</span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-6">.75</span></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-500 text-base font-medium font-['Satoshi'] leading-6">Transfer Fee</div>
                    <div className="justify-start text-yellow-400 text-base font-medium font-['Satoshi'] leading-6">£ 230.00</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

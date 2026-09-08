export default function PayLater() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
    <div className="flex w-full justify-center">
      <div className="w-[1768px] max-w-full inline-flex flex-col justify-start items-center gap-16">
        <div className="w-[486px] flex flex-col justify-start items-center gap-5">
          <div className="size- px-5 py-3.5 rounded-[75px] outline outline-8 outline-offset-[-7px] outline-yellow-400 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-black text-lg font-medium font-['Poppins'] leading-7">Pay Later</div>
          </div>
          <div className="self-stretch text-center justify-start"><span className="text-black text-5xl font-light font-['Poppins'] leading-[63px]">Send money </span><span className="text-yellow-400 text-5xl font-medium font-['Poppins'] leading-[63px]">today. </span><span className="text-black text-5xl font-medium font-['Poppins'] leading-[63px]">Repay over time.</span></div>
        </div>
        <div className="self-stretch inline-flex justify-center items-center gap-10">
          <div className="w-[561px] h-96 relative bg-yellow-50 rounded-[19px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400 overflow-hidden">
            <div className="w-[492.06px] h-60 left-[34px] top-[38px] absolute bg-linear-25 from-gray-700 via-slate-500 to-gray-700 rounded-xl overflow-hidden">
              <div className="w-28 left-[21.71px] top-[150.75px] absolute inline-flex flex-col justify-start items-start gap-3">
                <div className="justify-start text-gray-200 text-base font-normal font-['Poppins'] leading-5">Demo Payment</div>
                <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Poppins'] leading-8">£200</div>
              </div>
              <div className="w-32 left-[344.92px] top-[150.75px] absolute inline-flex flex-col justify-start items-start gap-3">
                <div className="text-right justify-start text-gray-200 text-base font-normal font-['Poppins'] leading-5">Remaining Limit</div>
                <div className="self-stretch text-right justify-start text-white text-2xl font-semibold font-['Poppins'] leading-8">£2,300</div>
              </div>
              <div className="w-[457.09px] h-0 left-[18.09px] top-[126.63px] absolute outline outline-[1.21px] outline-offset-[-0.60px] outline-gray-300" />
              <div className="w-28 left-[21.71px] top-[21.71px] absolute inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-gray-200 text-base font-normal font-['Poppins'] leading-5">Available Limit</div>
                <div className="self-stretch text-center justify-start text-white text-4xl font-semibold font-['Poppins'] leading-[47.28px]">£2,500</div>
              </div>
              <div className="w-9 h-11 left-[432.96px] top-[21.71px] absolute bg-gray-300" />
            </div>
            <div className="w-56 left-[169px] top-[297px] absolute inline-flex flex-col justify-start items-center gap-5">
              <div className="self-stretch text-center justify-start text-black text-3xl font-medium font-['Poppins'] leading-10">Check eligibility</div>
              <div className="self-stretch text-center justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-7">See your available limit</div>
            </div>
          </div>
          <div className="w-[561px] h-96 relative bg-yellow-50 rounded-[19px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400 overflow-hidden">
            <div className="w-96 h-64 left-[87px] top-[24px] absolute bg-white rounded-xl shadow-[0px_1px_3.9000000953674316px_0px_rgba(0,0,0,0.19)] outline outline-2 outline-offset-[-1.90px] overflow-hidden">
              <div className="w-[354px] left-[15.18px] top-[87.26px] absolute inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-5">Send Amount</div>
                  <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-5">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-5"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-5">200.00</span></div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-5">Fee</div>
                  <div className="justify-start"><span className="text-yellow-400 text-base font-medium font-['Satoshi'] leading-5">£</span><span className="text-stone-500 text-base font-medium font-['Satoshi'] leading-5"> </span><span className="text-zinc-800 text-base font-medium font-['Satoshi'] leading-5">4.99</span></div>
                </div>
              </div>
              <div className="w-[354px] left-[15.18px] top-[211.52px] absolute inline-flex justify-between items-center">
                <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-5">Repayment Date</div>
                <div className="justify-start text-neutral-400 text-base font-medium font-['Satoshi'] leading-5">28 July 2026</div>
              </div>
              <div className="w-[354px] left-[15.18px] top-[170.74px] absolute inline-flex justify-between items-center">
                <div className="justify-start text-black text-lg font-medium font-['Satoshi'] leading-6">Total Repayable</div>
                <div className="justify-start text-yellow-400 text-lg font-medium font-['Satoshi'] leading-6">£ 204.99</div>
              </div>
              <div className="w-[358px] h-0 left-[13.28px] top-[159.35px] absolute outline outline-1 outline-offset-[-0.47px] outline-zinc-400" />
              <div className="w-60 left-[15.18px] top-[13.28px] absolute inline-flex flex-col justify-start items-start gap-1.5">
                <div className="justify-start text-zinc-800 text-xl font-medium font-['Poppins'] leading-7">Pay in Full on Salary Day</div>
                <div className="justify-start text-neutral-400 text-xs font-normal font-['Poppins'] leading-4">Repay the full amount on your next salary day.</div>
              </div>
            </div>
            <div className="w-56 left-[169px] top-[297px] absolute inline-flex flex-col justify-start items-center gap-5">
              <div className="text-center justify-start text-black text-3xl font-medium font-['Poppins'] leading-10">Choose a plan and send</div>
              <div className="text-center justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-7">Select 4, 6, 8 or 12 months</div>
            </div>
          </div>
          <div className="w-[561px] h-96 relative bg-yellow-50 rounded-[19px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-yellow-400 overflow-hidden">
            <div className="w-56 left-[169px] top-[297px] absolute inline-flex flex-col justify-start items-center gap-5">
              <div className="text-center justify-start text-black text-3xl font-medium font-['Poppins'] leading-10">Repay Monthly</div>
              <div className="text-center justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-7">Make clear, fixed monthly payments.</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-80 h-72 left-[121px] top-[10px] absolute" src="/images/pay-later/pay-later-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

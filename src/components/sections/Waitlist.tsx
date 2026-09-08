export default function Waitlist() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <div className="max-w-full inline-flex items-start gap-[186px]">
          <div className="ml-[70px] inline-flex h-[473px] w-[995px] flex-col items-start gap-[53px]">
            <div className="w-[923px] justify-start text-black text-7xl font-medium font-['Poppins'] leading-[112px]">Ready to change how you send money?</div>
            <div className="self-stretch justify-start text-neutral-400 text-3xl font-normal font-['Poppins'] leading-10">Join thousands of people on the waitlist for the most flexible remittance app in the UK.</div>
            <div className="inline-flex items-center gap-6">
              <div className="w-[577px] h-16 relative bg-white rounded-[48px] shadow-[0px_0px_3.700000047683716px_0px_rgba(0,0,0,0.11)] overflow-hidden">
                <div className="left-[35px] top-[19px] absolute text-center justify-start text-neutral-400 text-lg font-normal font-['Poppins'] leading-7">Enter your email address</div>
              </div>
              <div className="w-60 h-16 px-24 py-4 bg-yellow-400 rounded-[57px] shadow-[0px_4px_16.299999237060547px_11px_rgba(0,0,0,0.12)] inline-flex justify-center items-center gap-0.5">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-center justify-start text-zinc-800 text-lg font-semibold font-['Inter'] leading-7">Join Waitlist</div>
                </div>
                <div className="relative size-6 origin-top-left rotate-[37deg] overflow-hidden">
                  <div className="absolute size-5 left-[7.20px] top-[6.81px] outline outline-2 outline-offset-[-1px] outline-zinc-800" />
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-[721px] w-[652px]" src="/images/cta/waitlist-phone.png" alt="" />
        </div>
      </div>
    </section>
  );
}

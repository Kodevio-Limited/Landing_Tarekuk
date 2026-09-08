import Reveal from "@/components/shared/Reveal";

export default function HowItWorks() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <div className="w-[1768px] max-w-full inline-flex flex-col justify-start items-center gap-10">
          <Reveal>
            <div className="w-[486px] flex flex-col justify-start items-center gap-5">
              <div className="size- px-5 py-3.5 rounded-[75px] outline outline-8 outline-offset-[-7px] outline-yellow-400 inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-black text-lg font-medium font-['Poppins'] leading-7">How It Works</div>
              </div>
              <div className="self-stretch text-center justify-start"><span className="text-black text-5xl font-light font-['Poppins'] leading-[63px]">Move money</span><span className="text-black text-5xl font-normal font-['Poppins'] leading-[63px]"> </span><span className="text-yellow-400 text-5xl font-medium font-['Poppins'] leading-[63px]">smarter </span><span className="text-black text-5xl font-medium font-['Poppins'] leading-[63px]">not harder</span></div>
            </div>
          </Reveal>
          <div className="self-stretch inline-flex justify-center items-center gap-8">
            {[1, 2, 3, 4].map((step, i) => (
              <Reveal key={step} delay={i + 1 as 1 | 2 | 3 | 4}>
                <div className={`w-96 h-[580px] relative card-hover`}>
                  <div className="w-96 h-[511px] left-0 top-[69px] absolute bg-white rounded-[19px] outline outline-1 outline-offset-[-1px] overflow-hidden">
                    <div className="size-64 left-[73px] top-[66px] absolute bg-yellow-50 rounded-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className={`absolute ${step === 1 ? "w-64 h-56 left-[16px] top-[50px]" : step === 2 ? "size-72 left-[-55px] top-[33px]" : step === 3 ? "w-52 h-60 left-[-4px] top-[35px]" : "w-72 h-80 left-[53px] top-[7px]"}`} src={`/images/how-it-works/step-${step}.png`} alt="" />
                    </div>
                    <div className="w-64 left-[83px] top-[364px] absolute inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="self-stretch text-center justify-start text-black text-3xl font-medium font-['Poppins'] leading-10">
                        {step === 1 ? "Create Account" : step === 2 ? "You chose the amount" : step === 3 ? "We sent to family" : "You Repay Later"}
                      </div>
                      <div className="self-stretch text-center justify-start text-stone-500 text-lg font-normal font-['Poppins'] leading-7">
                        {step === 1 ? "Sign up and verify your identity" : step === 2 ? "Choose amount, recipient and delivery method" : step === 3 ? "Your family receives the money in minutes" : "Repay on the due date in up to 30 days"}
                      </div>
                    </div>
                  </div>
                  <div className="size-24 left-[162px] top-0 absolute bg-yellow-400 rounded-[62px] outline outline-8 outline-white overflow-hidden">
                    <div className={`absolute text-center justify-start text-zinc-800 text-5xl font-normal font-['Poppins'] leading-[63px] ${step === 1 ? "left-[25px] top-[15px]" : step === 2 ? "left-[19px] top-[15px]" : step === 3 ? "left-[19px] top-[15px]" : "left-[18px] top-[15px]"}`}>
                      0{step}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

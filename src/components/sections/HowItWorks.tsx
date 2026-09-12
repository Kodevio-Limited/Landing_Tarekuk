import Reveal from "@/components/shared/Reveal";

const STEP_TITLES = ["Create Account", "You chose the amount", "We sent to family", "You Repay Later"];
const STEP_TEXTS = [
  "Sign up and verify your identity",
  "Choose amount, recipient and delivery method",
  "Your family receives the money in minutes",
  "Repay on the due date in up to 30 days",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="inline-flex w-[1768px] max-w-full flex-col items-center justify-start gap-10">
          <Reveal>
            <div className="flex w-[486px] max-w-full flex-col items-center justify-start gap-5">
              <div className="inline-flex size-auto items-center justify-center gap-2.5 rounded-[75px] px-5 py-3.5 outline outline-8 outline-offset-[-7px] outline-yellow-400">
                <div className="text-center text-lg font-medium leading-7 text-black">How It Works</div>
              </div>
              <div className="self-stretch text-center">
                <span className="text-5xl font-light leading-[63px] text-black">Move money </span>
                <span className="text-5xl font-medium leading-[63px] text-yellow-400">smarter </span>
                <span className="text-5xl font-medium leading-[63px] text-black">not harder</span>
              </div>
            </div>
          </Reveal>
          <div className="inline-flex self-stretch items-center justify-center gap-8 max-lg:flex-col">
            {[1, 2, 3, 4].map((step, i) => (
              <Reveal key={step} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="card-hover group relative h-[580px] w-96">
                  <div className="absolute left-0 top-[69px] h-[511px] w-96 overflow-hidden rounded-[19px] bg-white outline outline-1 outline-offset-[-1px]">
                    <div className="absolute left-[73px] top-[66px] size-64 overflow-hidden rounded-full bg-yellow-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className={`absolute transition-transform duration-500 group-hover:scale-105 ${
                          step === 1
                            ? "h-56 w-64 left-[16px] top-[50px]"
                            : step === 2
                              ? "size-72 left-[-55px] top-[33px]"
                              : step === 3
                                ? "h-60 w-52 left-[-4px] top-[35px]"
                                : "h-80 w-72 left-[53px] top-[7px]"
                        }`}
                        src={`/images/how-it-works/step-${step}.png`}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute left-[83px] top-[364px] flex w-64 flex-col items-center justify-start gap-2.5">
                      <div className="text-center text-3xl font-medium leading-10 text-black">
                        {STEP_TITLES[i]}
                      </div>
                      <div className="text-center text-lg leading-7 text-stone-500">
                        {STEP_TEXTS[i]}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[162px] top-0 size-24 transition-transform duration-500 group-hover:scale-105">
                    <span className="animate-spin-slow absolute -inset-1 rounded-[62px] border-2 border-dashed border-yellow-300/70" aria-hidden="true" />
                    <div className="relative flex size-24 items-center justify-center overflow-hidden rounded-[62px] bg-yellow-400 outline outline-8 outline-white">
                      <span className="text-5xl font-normal leading-[63px] text-zinc-800">
                        0{step}
                      </span>
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

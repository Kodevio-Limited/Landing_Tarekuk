import Reveal from "@/components/shared/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <Reveal>
          <div className="inline-flex w-[1768px] max-w-full flex-col items-center justify-start gap-2.5 rounded-2xl bg-zinc-800 px-40 py-4 max-lg:px-6 max-lg:py-10">
            <div className="inline-flex flex-col items-center justify-start gap-6 self-stretch max-lg:gap-8 lg:flex-row lg:items-center lg:gap-6">
              {/* Photo */}
              <div className="animate-float-slow max-lg:w-full max-lg:max-w-[799px]">
                <div className="rounded-[38px] bg-yellow-400 p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-[532px] w-[799px] max-lg:h-auto max-lg:w-full rounded-[30px] bg-white p-2.5 image-depth"
                    src="/images/about/family-sent.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Copy */}
              <div className="inline-flex w-[605px] max-w-full flex-col items-end justify-start gap-14 max-lg:items-center max-lg:pb-6">
                <div className="flex w-[486px] max-w-full flex-col items-end justify-center gap-5 max-lg:items-center">
                  <div className="inline-flex size-auto items-center justify-center gap-2.5 rounded-[75px] px-5 py-3.5 outline outline-8 outline-offset-[-7px] outline-yellow-400">
                    <div className="text-center text-lg font-medium leading-7 text-white">About Family Sent</div>
                  </div>
                  <div className="self-stretch text-right text-5xl font-light leading-[63px] text-white max-lg:text-center">
                    Built for families.{"\u2028"}        <span className="text-5xl font-medium leading-[63px] text-yellow-400">Designed for real life.</span>
                  </div>
                </div>
                <div className="self-stretch text-right max-lg:text-center">
                  <span className="text-3xl font-medium leading-10 text-zinc-800">FamilySent</span>
                  <span className="text-3xl font-normal leading-10 text-neutral-400"> helps you send money home when it matters most — with the flexibility to repay in a way that works for you.</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "@/components/shared/Reveal";

export default function OurStory() {
  return (
    <section className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="inline-flex w-[1764px] max-w-full flex-col items-center justify-start gap-10">
          <Reveal>
            <div className="inline-flex self-stretch flex-col justify-start items-center gap-10">
              <div className="inline-flex size-auto items-center justify-center gap-2.5 rounded-[75px] px-5 py-3.5 outline outline-8 outline-offset-[-7px] outline-yellow-400">
                <div className="text-center text-lg font-medium leading-7 text-black">Our Story</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="inline-flex self-stretch flex-col justify-start items-center gap-14 rounded-3xl bg-white px-6 py-10 outline outline-1 outline-offset-[-1px] outline-yellow-400 sm:px-14 sm:py-16 lg:flex-row lg:gap-32 lg:px-52 lg:py-20">
              {/* Quote */}
              <div className="inline-flex w-[875px] max-w-full flex-col justify-start items-start gap-10">
                <div className="flex w-[486px] max-w-full flex-col justify-center items-start gap-5">
                  <div className="self-stretch">
                    <span className="text-5xl font-light leading-[63px] text-black">Why </span>
                    <span className="text-5xl font-medium leading-[63px] text-yellow-400">FamilySent</span>
                    <span className="text-5xl font-light leading-[63px] text-black"> was created</span>
                  </div>
                </div>
                <div className="inline-flex justify-start items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-4">
                  <div className="h-40 w-0 shrink-0 outline outline-[3px] outline-offset-[-1.50px] outline-yellow-400" />
                  <div className="w-[850px] max-w-full text-neutral-400 text-3xl font-normal leading-10">
                    As a member of the global diaspora, I understand the reality of needing to support family urgently — even before payday. SendLater was created to make sending money home faster, simpler and more flexible.
                  </div>
                </div>
              </div>
              {/* Founder card */}
              <div className="group inline-flex w-80 shrink-0 flex-col justify-start items-center gap-2.5">
                <div className="relative">
                  <span className="animate-spin-slow absolute -inset-2 rounded-2xl border-2 border-dashed border-yellow-300/60" aria-hidden="true" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="relative h-52 w-72 rounded-2xl object-cover image-depth transition-transform duration-500 group-hover:scale-[1.02]"
                    src="/images/about/founder.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex w-72 max-w-full flex-col justify-start items-center gap-2.5">
                  <div className="self-stretch text-center text-2xl font-medium leading-9 text-black">Tarek</div>
                  <div className="self-stretch text-center text-xl font-normal leading-7 text-neutral-400">Founder &amp; CEO, Familysent</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

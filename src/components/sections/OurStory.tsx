import Reveal from "@/components/motion/Reveal";
import SectionPill from "@/components/ui/SectionPill";

export default function OurStory() {
  return (
    <section className="w-full overflow-hidden py-14 sm:py-16">
      <div className="mx-auto flex w-[1764px] max-w-full justify-center px-4 sm:px-8">
        <div className="flex w-full max-w-full flex-col items-center justify-start gap-10">
          <Reveal>
            <div className="flex w-full flex-col items-center justify-start gap-10">
              <SectionPill>Our Story</SectionPill>
            </div>
          </Reveal>

          <Reveal delay={1} className="w-full">
            <div className="flex w-full flex-col items-center justify-between gap-10 rounded-3xl bg-white px-6 py-10 outline outline-1 outline-offset-[-1px] outline-primary/40 shadow-sm sm:px-12 sm:py-14 lg:flex-row lg:gap-16 lg:px-20 lg:py-20 xl:px-32">
              {/* Quote Column */}
              <div className="flex w-full flex-col items-start justify-start gap-8 lg:max-w-[850px]">
                <div className="flex w-full flex-col items-start justify-center gap-4">
                  <h2 className="text-3xl font-light leading-tight text-black sm:text-5xl sm:leading-[63px]">
                    Why <span className="font-medium text-primary">FamilySent</span> was created
                  </h2>
                </div>

                <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="h-0.5 w-full shrink-0 bg-primary sm:h-36 sm:w-[3px]" />
                  <p className="w-full text-base font-normal leading-relaxed text-neutral-500 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
                    As a member of the global diaspora, I understand the reality of needing to support family urgently — even before payday. FamilySent was created to make sending money home faster, simpler and more flexible.
                  </p>
                </div>
              </div>

              {/* Founder card */}
              <div className="group flex w-full shrink-0 flex-col items-center justify-start gap-3 sm:w-80">
                <div className="relative w-full max-w-[280px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-52 w-full rounded-2xl object-cover image-depth transition-transform duration-500 group-hover:scale-[1.02]"
                    src="/images/about/founder.png"
                    alt="Tarek - Founder & CEO"
                    loading="lazy"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1 text-center">
                  <h3 className="text-2xl font-medium leading-9 text-black">Tarek</h3>
                  <p className="text-lg font-normal leading-7 text-neutral-400">Founder &amp; CEO, FamilySent</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

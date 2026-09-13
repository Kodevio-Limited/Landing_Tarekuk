import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto flex w-[1768px] max-w-full justify-center px-4 sm:px-8">
        <Reveal className="w-full">
          <div className="w-full rounded-[28px] bg-[#34383E] p-6 sm:p-10 lg:p-12">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left Column: Photo */}
              <div className="w-full overflow-hidden rounded-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/family-sent.png"
                  alt="Family Sent community"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Copy aligned right */}
              <div className="flex flex-col items-end text-right max-lg:items-center max-lg:text-center">
                {/* Pill */}
                <div className="inline-flex items-center justify-center rounded-full border border-[#FFC107] bg-transparent px-6 py-2">
                  <span className="text-base font-medium text-white sm:text-lg">
                    About Family Sent
                  </span>
                </div>

                {/* Heading */}
                <div className="mt-6 flex flex-col items-end max-lg:items-center">
                  <h2 className="text-3xl font-light italic leading-tight text-white sm:text-4xl lg:text-[46px]">
                    Built for families.
                  </h2>
                  <p className="mt-1 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[46px]">
                    Designed for real life.
                  </p>
                </div>

                {/* Description */}
                <p className="mt-8 max-w-lg text-base font-normal leading-relaxed text-[#A3A3A3] sm:text-xl max-lg:text-center">
                  helps you send money home when it matters most — with the flexibility to repay in a way that works for you.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

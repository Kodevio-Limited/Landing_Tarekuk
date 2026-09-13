import Reveal from "@/components/motion/Reveal";
import SectionPill from "@/components/ui/SectionPill";

const STEPS = [
  {
    id: 1,
    bg: "/images/how-it-works/bg1.png",
    title: "Create Account",
    description: "Sign up and verify your identity",
  },
  {
    id: 2,
    bg: "/images/how-it-works/bg2.png",
    title: "You chose the amount",
    description: "Choose amount, recipient and delivery method",
  },
  {
    id: 3,
    bg: "/images/how-it-works/bg3.png",
    title: "We sent to family",
    description: "Your family receives the money in minutes",
  },
  {
    id: 4,
    bg: "/images/how-it-works/bg4.png",
    title: "You Repay Later",
    description: "Repay on the due date in up to 30 days",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full overflow-hidden py-14 sm:py-20">
      <div className="mx-auto flex w-[1768px] max-w-full flex-col items-center gap-14 px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
            <SectionPill>How It Works</SectionPill>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-light italic leading-tight text-black sm:text-5xl lg:text-[52px]">
                Move money <span className="font-medium not-italic text-primary">smarter</span>
              </h2>
              <p className="mt-1 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[52px]">
                not harder
              </p>
            </div>
          </div>
        </Reveal>

        {/* 4 Card Row */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <Reveal key={item.id} delay={i + 1}>
              <div className="group relative mx-auto aspect-[417/589] w-full max-w-[360px] select-none transition-transform duration-500 ease-out hover:scale-[1.02] sm:max-w-none">
                {/* Background Card PNG from Figma */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.bg}
                  alt={`Step ${item.id} background`}
                  className="h-auto w-full object-contain filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
                  loading="lazy"
                />

                {/* Card Text Content */}
                <div className="absolute top-[68%] left-2 right-2 bottom-[4%] flex flex-col items-center justify-center px-4 text-center">
                  <h3 className="text-base font-bold tracking-tight leading-tight text-black sm:text-[19px] xl:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-[210px] text-xs font-normal leading-snug text-[#737373] sm:text-sm xl:text-base xl:max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

export default function Hero() {
  return (
    <section id="top" className="relative mt-6 overflow-hidden bg-background pt-24 pb-8 sm:pt-28 sm:pb-10">
      {/* Background shadow glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shadow.png"
          alt=""
          className="h-auto w-full max-w-[1440px] min-w-[1000px] object-top"
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <h1 className="flex flex-col items-center tracking-tight">
            {/* Main Title: Send Money Home */}
            <span className="text-4xl font-bold leading-tight text-black sm:text-6xl md:text-[68px] lg:text-6xl">
              Send Money Home
            </span>
            {/* Sub Title: Pay Later */}
            <span className="mt-6 text-3xl font-bold leading-tight text-primary sm:text-5xl md:text-[56px] lg:text-6xl">
              Pay Later
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-stone-500 sm:text-xl md:text-2xl">
            Send money to your loved ones instantly.
            <br />
            Repay later when it&apos;s convenient for you.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <Button href="#download" className="!h-14 !px-8 !text-base !shadow-none hover:!shadow-none">
            Download Now
          </Button>
        </FadeIn>
      </Container>

      <FadeIn delay={0.5} className="relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/mockup.png"
          alt="FamilySent app mockup"
          className="mx-auto mt-[52px] block h-auto w-full max-w-[1039px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          }}
        />
      </FadeIn>
    </section>
  );
}

import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 sm:pt-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="flex flex-col text-[clamp(40px,8vw,96px)] font-semibold leading-[1.15] tracking-tight">
            <span className="text-black">Send Money Home</span>
            <span className="text-yellow-400">Pay Later</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-[842px] text-[clamp(20px,3.6vw,36px)] font-normal leading-[1.36] text-stone-500">
            Send money to your loved ones instantly.
            <br />
            Repay later when it&apos;s convenient for you.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <Button href="#download" className="h-16 w-60">
              Download Now
            </Button>
          </div>
        </Reveal>
      </Container>

      <Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mockup-hero.svg"
          alt="Tarekuk app mockup"
          className="mx-auto mt-[52px] block h-auto w-full max-w-[1039px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          }}
        />
      </Reveal>
    </section>
  );
}

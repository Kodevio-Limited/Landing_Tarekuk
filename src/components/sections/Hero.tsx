import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

/* Decorative twinkling sparkles (animation layer, no layout impact) */
const SPARKS = [
  { left: "8%", top: "18%", size: 14, delay: "0s" },
  { left: "16%", top: "62%", size: 10, delay: "1.1s" },
  { left: "86%", top: "24%", size: 12, delay: "0.6s" },
  { left: "92%", top: "58%", size: 9, delay: "1.8s" },
  { left: "74%", top: "8%", size: 8, delay: "2.4s" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-24 pb-8 sm:pt-28 sm:pb-10">
      {/* Ambient aurora glows (background animation) */}
      <div className="pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true">
        <div className="aurora animate-aurora left-[8%] top-[-10%] size-[420px] bg-yellow-300/30" />
        <div className="aurora animate-aurora-slow right-[4%] top-[16%] size-[360px] bg-amber-400/20" />
      </div>

      {/* Twinkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {SPARKS.map((s, i) => (
          <svg
            key={i}
            className="animate-twinkle absolute text-yellow-400"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        ))}
      </div>

      <Container className="flex flex-col items-center text-center">
        <h1 className="flex flex-col text-[clamp(40px,8vw,96px)] font-semibold leading-[1.15] tracking-tight">
          <span className="animate-pop-in pop-1 text-black">Send Money Home</span>
          <span className="animate-pop-in pop-2 shimmer-text">Pay Later</span>
        </h1>

        <p className="animate-pop-in pop-3 mt-8 max-w-[842px] text-[clamp(20px,3.6vw,36px)] font-normal leading-[1.36] text-stone-500">
          Send money to your loved ones instantly.
          <br />
          Repay later when it&apos;s convenient for you.
        </p>

        <div className="animate-pop-in pop-4 mt-10">
          <div className="relative">
            <span
              className="animate-halo pointer-events-none absolute -inset-2 rounded-full bg-yellow-400/40 blur-md"
              aria-hidden="true"
            />
            <Button href="#download" className="relative h-16 w-60">
              Download Now
            </Button>
          </div>
        </div>
      </Container>

      <div className="animate-pop-in pop-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mockup-hero.png"
          alt="Tarekuk app mockup"
          className="mx-auto mt-[52px] block h-auto w-full max-w-[1039px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}

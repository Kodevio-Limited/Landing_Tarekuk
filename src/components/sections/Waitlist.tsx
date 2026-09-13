"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/motion/Reveal";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    // Wire this to your API route / ESP when ready.
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="download" className="relative w-full overflow-hidden py-14 sm:py-20">
      {/* Soft warm radial ambient glow behind phone (no square edges) */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-[140px] max-lg:left-1/2 max-lg:-translate-x-1/2 sm:h-[650px] sm:w-[650px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-[1768px] max-w-full justify-center px-4 sm:px-8">
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <Reveal className="w-full lg:max-w-[800px]">
            <div className="flex w-full flex-col items-start gap-8 sm:gap-10">
              <h2 className="w-full text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl sm:leading-[1.2] lg:text-[64px] lg:leading-[1.12]">
                Ready to change how you send money?
              </h2>
              <p className="w-full text-base font-normal leading-relaxed text-[#737373] sm:text-xl lg:text-2xl">
                Join thousands of people on the waitlist for the most flexible remittance app in the UK.
              </p>
              {status === "success" ? (
                <div className="inline-flex items-center gap-4 rounded-[48px] border border-emerald-400/40 bg-emerald-400/10 px-7 py-4 text-base font-medium text-emerald-600 sm:text-lg">
                  <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex w-full max-w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4">
                  <div className="relative h-14 w-full sm:h-16 sm:w-[420px]">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      className={`h-full w-full rounded-[48px] border bg-white px-6 text-base font-normal text-zinc-800 shadow-[0px_2px_12px_rgba(0,0,0,0.06)] outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,193,7,0.25)] sm:px-8 sm:text-lg ${
                        status === "error" ? "border-red-400" : "border-gray-200/60"
                      }`}
                    />
                    {status === "error" && (
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-red-500 sm:right-7" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" className="size-6"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 8v4.5m0 3.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-lift flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-[57px] bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0px_4px_16.3px_11px_rgba(0,0,0,0.12)] hover:opacity-95 sm:h-16 sm:w-auto sm:text-lg"
                  >
                    <span>Join Waitlist</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
                      <path d="M6 18L18 6m0 0H9m9 0v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {status === "error" && (
                    <p className="text-sm font-medium text-red-500">Please enter a valid email address.</p>
                  )}
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={2} className="w-full lg:w-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mx-auto h-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              src="/images/phone.png"
              alt="FamilySent App Preview"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

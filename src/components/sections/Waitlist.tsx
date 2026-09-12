"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/shared/Reveal";

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
    <section id="download" className="w-full overflow-hidden py-14 sm:py-16">
      <div className="flex w-full justify-center px-4 sm:px-8">
        <div className="inline-flex max-w-full flex-col items-start gap-12 max-lg:px-6 lg:flex-row lg:items-start lg:gap-[186px]">
          <Reveal>
            <div className="ml-0 inline-flex h-auto w-[995px] max-w-full flex-col items-start gap-[53px] lg:ml-[70px]">
              <div className="w-[923px] max-w-full text-5xl font-medium leading-[1.25] text-black sm:text-6xl sm:leading-[1.3] lg:text-7xl lg:leading-[112px]">
                Ready to change how you send money?
              </div>
              <div className="self-stretch text-2xl font-normal leading-10 text-neutral-400 sm:text-3xl">
                Join thousands of people on the waitlist for the most flexible remittance app in the UK.
              </div>
              {status === "success" ? (
                <div className="inline-flex items-center gap-4 rounded-[48px] border border-emerald-400/40 bg-emerald-400/10 px-7 py-4 text-lg font-medium text-emerald-600">
                  <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="inline-flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <div className="relative h-16 w-[577px] max-w-full">
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
                      className={`h-16 w-full rounded-[48px] border bg-white px-9 text-lg font-normal text-zinc-800 shadow-[0px_0px_3.7px_0px_rgba(0,0,0,0.11)] outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-yellow-400 focus:shadow-[0_0_0_4px_rgba(250,204,21,0.25)] ${
                        status === "error" ? "border-red-400" : "border-transparent"
                      }`}
                    />
                    {status === "error" && (
                      <span className="absolute right-7 top-1/2 -translate-y-1/2 text-red-500" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" className="size-6"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 8v4.5m0 3.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-lift inline-flex h-16 w-60 cursor-pointer items-center justify-center gap-2 rounded-[57px] bg-yellow-400 px-24 text-lg font-semibold text-zinc-800 shadow-[0px_4px_16.3px_11px_rgba(0,0,0,0.12)] hover:bg-yellow-300 max-sm:w-full max-sm:px-8"
                  >
                    Join Waitlist
                  </button>
                  {status === "error" && (
                    <p className="text-sm font-medium text-red-500">Please enter a valid email address.</p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
          <Reveal delay={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="animate-float h-[721px] w-[652px] max-w-full max-lg:h-auto image-depth"
              src="/images/cta/waitlist-phone.png"
              alt=""
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

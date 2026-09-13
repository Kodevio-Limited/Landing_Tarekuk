import Button from "@/components/ui/Button";

const QUICK_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Pay Later", href: "#pay-later" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const RESOURCES = [
  { label: "New & Blog", href: "#top" },
  { label: "Privacy Policy", href: "#top" },
  { label: "Terms of Conditions", href: "#top" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Phone",
    href: "#download",
    path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-stone-900">
      <div className="relative mx-auto flex w-full max-w-[1928px] flex-col gap-12 px-6 pt-12 pb-8 sm:px-10 sm:pt-16 sm:pb-10 xl:px-[100px]">
        {/* Main Content Layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Brand + CTA */}
          <div className="flex shrink-0 flex-col items-start gap-6 sm:gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/footer/logo.png"
              alt="Familysent logo"
              className="h-16 w-auto max-w-[300px] object-contain sm:h-24 sm:max-w-[431px]"
              loading="lazy"
            />
            <Button href="#download">Download Now</Button>
          </div>

          {/* Link Columns + Download Badges */}
          <div className="flex flex-wrap items-start justify-between gap-8 sm:gap-10 md:gap-12 xl:gap-20">
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <h3 className="whitespace-nowrap text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                Quick Links
              </h3>
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="link-sweep whitespace-nowrap text-base font-normal text-zinc-400 transition-colors duration-300 hover:text-primary sm:text-lg lg:text-xl"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <h3 className="whitespace-nowrap text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                Resources
              </h3>
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                {RESOURCES.map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    className="link-sweep whitespace-nowrap text-base font-normal text-zinc-400 transition-colors duration-300 hover:text-primary sm:text-lg lg:text-xl"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Download From */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 max-sm:w-full">
              <h3 className="whitespace-nowrap text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                Download From
              </h3>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#download"
                  className="group relative flex h-[72px] w-[230px] items-center gap-4 rounded-[54px] bg-zinc-800 px-4 outline outline-1 outline-offset-[-0.89px] outline-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-700/80 hover:outline-primary/60 sm:h-20 sm:w-64"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-50 transition-transform duration-300 group-hover:scale-105 sm:size-14">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/footer/apple-logo.svg" alt="App Store" className="size-6 sm:size-8" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-normal text-gray-200">Download on the</span>
                    <span className="text-base font-medium text-neutral-50 sm:text-lg">App Store</span>
                  </div>
                </a>

                <a
                  href="#download"
                  className="group relative flex h-[72px] w-[230px] items-center gap-4 rounded-[54px] bg-zinc-800 px-4 outline outline-1 outline-offset-[-0.89px] outline-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-700/80 hover:outline-primary/60 sm:h-20 sm:w-64"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-50 transition-transform duration-300 group-hover:scale-105 sm:size-14">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/footer/playstore.svg" alt="Google Play" className="size-6 sm:size-8" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-normal text-gray-200">Download on the</span>
                    <span className="text-base font-medium text-neutral-50 sm:text-lg">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed divider */}
        <div
          className="relative -mx-6 border-t-4 border-dashed border-primary sm:-mx-10 xl:-mx-[100px]"
          aria-hidden="true"
        />

        <div className="inline-flex min-h-12 w-full flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-base font-normal text-neutral-400 sm:text-lg lg:text-xl">
            © 2026 FamilySent. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 sm:size-12"
              >
                <svg className="size-5 fill-zinc-400 transition-colors duration-300 hover:fill-primary sm:size-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

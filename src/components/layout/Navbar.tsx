import Link from "next/link";
import Button from "@/components/shared/Button";

const NAV_LINKS = [
  { label: "Pay Later", href: "#pay-later" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-[21px] z-50 w-[min(1087px,calc(100%-32px))] -translate-x-1/2">
      <nav className="flex h-[75px] items-center justify-between rounded-[154px] bg-ink px-6 text-background sm:px-8">
        <Link href="/" className="flex items-center text-xl font-bold tracking-tight">
          Tarekuk
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-background/70 transition-colors hover:text-background"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#download" className="hidden !px-8 sm:inline-flex">
          Download Now
        </Button>
      </nav>
    </header>
  );
}

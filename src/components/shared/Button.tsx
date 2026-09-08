import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[57px] font-medium transition-colors duration-300 ease-in-out";
  const styles =
    variant === "primary"
      ? "bg-yellow-400 px-8 py-4 text-lg font-semibold text-zinc-800 shadow-[0px_4px_16.3px_11px_rgba(0,0,0,0.12)] hover:bg-yellow-300"
      : "text-ink hover:text-black";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
      {variant === "primary" && (
        <span className="inline-block h-6 w-6" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-full w-full"
          >
            <path
              d="M6 18 18 6m0 0h-7m7 0v7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </a>
  );
}

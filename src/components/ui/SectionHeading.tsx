import type { ReactNode } from "react";

export default function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-center text-5xl font-light leading-[63px] text-black ${className}`}
    >
      {children}
    </h2>
  );
}

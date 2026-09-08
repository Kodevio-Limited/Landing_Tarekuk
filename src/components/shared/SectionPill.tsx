import type { ReactNode } from "react";

export default function SectionPill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 rounded-[75px] px-5 py-3.5 outline outline-8 outline-offset-[-7px] outline-yellow-400 ${className}`}
    >
      <span className="text-lg font-medium leading-7 text-black">
        {children}
      </span>
    </div>
  );
}

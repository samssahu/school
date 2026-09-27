import type { ReactNode } from "react";

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span
    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
    style={{ color: "var(--accent)" }}
  >
    <span className="w-5 h-px inline-block" style={{ backgroundColor: "var(--accent)", opacity: 0.5 }} />
    {children}
    <span className="w-5 h-px inline-block" style={{ backgroundColor: "var(--accent)", opacity: 0.5 }} />
  </span>
);

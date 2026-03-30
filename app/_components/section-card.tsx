import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
};

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function SectionCard({
  title,
  right,
  children,
  contentClassName,
}: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-border bg-panel p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-foreground">
          {title}
        </h2>
        {right}
      </div>
      <div className={contentClassName ?? "mt-5"}>{children}</div>
    </section>
  );
}

// app/_components/contribution-grid.tsx
interface ContributionGridProps {
  weeks?: number;
}

export function ContributionGrid({ weeks = 18 }: ContributionGridProps) {
  const squares = Array.from({ length: 7 * weeks }, (_, i) => i);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-panel p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium text-foreground">
          GitHub contributions
        </div>
        <div className="text-xs text-muted">Last {weeks} weeks</div>
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {squares.map((i) => {
          const level = (i * 7 + (i % 5) * 3) % 5;
          const className =
            level === 0
              ? "bg-divider"
              : level === 1
                ? "bg-muted/20"
                : level === 2
                  ? "bg-muted/40"
                  : level === 3
                    ? "bg-muted/60"
                    : "bg-accent/60";

          return (
            <div
              key={i}
              className={`h-3 w-3 rounded-[3px] ${className}`}
            />
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted">
        <span>Less</span>
        <span className="h-3 w-3 rounded-[3px] bg-divider" />
        <span className="h-3 w-3 rounded-[3px] bg-muted/20" />
        <span className="h-3 w-3 rounded-[3px] bg-muted/40" />
        <span className="h-3 w-3 rounded-[3px] bg-muted/60" />
        <span className="h-3 w-3 rounded-[3px] bg-accent/60" />
        <span>More</span>
      </div>
    </div>
  );
}
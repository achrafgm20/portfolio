// app/_components/status-badge.tsx
interface StatusBadgeProps {
  status: string;
  details?: string;
}

export function StatusBadge({ status, details }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-sm">
      <span className="h-2 w-2 rounded-full bg-accent" />
      <span className="text-foreground">{status}</span>
      {details && (
        <>
          <span className="text-muted">•</span>
          <span className="text-muted">{details}</span>
        </>
      )}
    </div>
  );
}
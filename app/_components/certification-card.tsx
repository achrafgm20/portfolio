// app/_components/certification-card.tsx
export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-foreground">
        {certification.name}
      </div>
      <div className="mt-1 text-sm text-muted">
        {[certification.issuer, certification.year].filter(Boolean).join(" · ")}
      </div>
    </div>
  );
}
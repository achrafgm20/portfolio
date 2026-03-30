// app/_components/education-card.tsx
export interface Education {
  title: string;
  school: string;
  period: string;
  details?: string;
}

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-semibold text-foreground">
          {education.title}
        </div>
        <div className="text-xs text-muted">{education.period}</div>
      </div>
      <div className="mt-1 text-sm text-muted">{education.school}</div>
      {education.details && (
        <div className="mt-2 text-sm text-muted">{education.details}</div>
      )}
    </div>
  );
}
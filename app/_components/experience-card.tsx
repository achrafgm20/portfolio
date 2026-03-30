// app/_components/experience-card.tsx
export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-semibold text-foreground">
          {experience.title} · {experience.company}
        </div>
        <div className="text-xs text-muted">
          {experience.period}
          {experience.location ? ` · ${experience.location}` : ""}
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
        {experience.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
// app/_components/experience-list.tsx
import { ExperienceCard, type Experience } from "./experience-card";

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="space-y-5">
      {experiences.map((exp) => (
        <ExperienceCard
          key={`${exp.title}-${exp.company}`}
          experience={exp}
        />
      ))}
    </div>
  );
}
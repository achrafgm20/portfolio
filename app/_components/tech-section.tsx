// app/_components/tech-section.tsx
import { type SimpleIcon } from "simple-icons";
import { TechPill } from "./tech-pill";

export interface TechCategory {
  label: string;
  items: Array<{ icon: SimpleIcon; label: string }>;
}

interface TechSectionProps {
  categories: TechCategory[];
}

export function TechSection({ categories }: TechSectionProps) {
  return (
    <div className="grid gap-6">
      {categories.map((category) => (
        <div key={category.label} className=" flex  justify-start items-start gap-2 space-y-3">
          <div className="text-xs min-w-32 font-semibold tracking-wide text-muted">
            {category.label.toUpperCase()}
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <TechPill key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
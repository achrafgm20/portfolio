// app/_components/tech-pill.tsx
import { type SimpleIcon } from "simple-icons";
import { BrandIcon } from "./brand-icon";

interface TechPillProps {
  icon: SimpleIcon;
  label: string;
}

export function TechPill({ icon, label }: TechPillProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-2">
      <BrandIcon icon={icon} className="h-4 w-4 text-muted" title={label} />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}
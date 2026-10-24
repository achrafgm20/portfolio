import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  fulldescription?: string;
  linkUrl?: string;
  videoUrl?: string;
  liveUrl?: string;
  media?: { type: "image" | "video"; src: string; alt: string }[];
};

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.href ?? "#"}
            className="block rounded-xl border border-border bg-panel p-4 hover:bg-divider"
            rel={project.href ? "noreferrer" : undefined}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {project.name}
                </div>
                <div className="mt-1 text-sm leading-6 text-muted">
                  {project.description}
                </div>
              </div>
              <span className="text-muted" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-panel px-2 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

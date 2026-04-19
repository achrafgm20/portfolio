import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectGallery from "@/app/_components/project-gallery";

type Props = {
  params: Promise<{
    projects: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const projectSlug = resolvedParams.projects;

  
  // Find the project based on the slug in the URL
  const project = projects.find(
    (p) => p.href?.split("/").pop() === projectSlug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-1 justify-center px-4 py-10 min-h-screen bg-background">
      <main className="w-full max-w-3xl space-y-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            <span aria-hidden="true" className="mr-2">
              &larr;
            </span>
            Back to Home
          </Link>
        </nav>

        {/* Header Section */}
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Media / Showcase */}
        {project.media && project.media.length > 0 && (
          <ProjectGallery media={project.media} />
        )}

        {/* Main Content & Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Full Description */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">About the Project</h2>
            <div className="prose prose-invert max-w-none text-muted leading-8">
              <p>{project.fulldescription || "More details coming soon."}</p>
            </div>
            
            {project.linkUrl && (
              <div className="pt-4 flex space-x-2">
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-page hover:opacity-90 transition"
                 > 
                 Github Project
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>

                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-page hover:opacity-90 transition"
                 > 
                
                  Video of Project
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              </div>
            )}
          </section>

          {/* Right Column: Metadata */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-panel p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border/50 bg-background px-2.5 py-1 text-xs font-medium text-foreground shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Additional Info block (can be expanded later) */}
            <div className="rounded-xl border border-border bg-panel p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Role
              </h3>
              <p className="text-sm text-foreground font-medium">Full-stack Developer</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

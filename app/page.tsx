import {
  type SimpleIcon,
  siAngular,
  siBootstrap,
  siCss,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siGraphql,
  siH2database,
  siHtml5,
  siJavascript,
  siJira,
  siJquery,
  siJsonwebtokens,
  siKubernetes,
  siLaravel,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siReact,
  siSpring,
  siSpringboot,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siUml,
} from "simple-icons";

import { BrandIcon } from "./_components/brand-icon";
import { ProjectsSection, type Project } from "./_components/projects-section";
import { SectionCard, SectionPill } from "./_components/section-card";
import { ThemeToggle } from "./_components/theme-toggle";

type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

type Education = {
  title: string;
  school: string;
  period: string;
  details?: string;
};

type Certification = {
  name: string;
  issuer?: string;
  year?: string;
};

type Recommendation = {
  author: string;
  role?: string;
  quote: string;
};

function TechPill({ icon, label }: { icon: SimpleIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-2">
      <BrandIcon icon={icon} className="h-4 w-4 text-muted" title={label} />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}

function ContributionGrid() {
  const squares = Array.from({ length: 7 * 18 }, (_, i) => i);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-panel p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium text-foreground">
          GitHub contributions
        </div>
        <div className="text-xs text-muted">Last 18 weeks</div>
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

export default function Home() {
  const profile = {
    name: "Your Name",
    role: "Full-stack Developer",
    location: "City, Country",
    email: "you@example.com",
    phone: "+00 00 00 00 00",
    website: "your-domain.com",
    linkedIn: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  };

  const resume =
    "Write a short résumé that summarizes your experience, the kind of roles you’re targeting, and the impact you’ve delivered. Keep it concise and specific.";

  const experiences: Experience[] = [
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2023 — Present",
      location: "Remote",
      points: [
        "Built and shipped features end-to-end in a modern web stack.",
        "Improved performance and reliability through profiling and monitoring.",
        "Collaborated closely with product/design to deliver iterative releases.",
      ],
    },
    {
      title: "Full-stack Developer",
      company: "Previous Company",
      period: "2021 — 2023",
      points: [
        "Delivered APIs and UIs with a focus on maintainability.",
        "Implemented CI/CD and improved developer experience.",
      ],
    },
  ];

  const education: Education[] = [
    {
      title: "Degree / Program",
      school: "School Name",
      period: "2018 — 2021",
      details: "Optional details (focus, honors, coursework).",
    },
  ];

  const projects: Project[] = [
    {
      name: "Project One",
      description: "A short description of what it is and what you built.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      href: "https://example.com",
    },
    {
      name: "Project Two",
      description: "Describe the problem, solution, and the outcome.",
      tags: ["API", "Auth", "PostgreSQL"],
    },
    {
      name: "Project Three",
      description: "Keep it short and impact-focused.",
      tags: ["React", "Design System"],
    },
    {
      name: "Project Four",
      description: "An extra project to demonstrate the Show More behavior.",
      tags: ["Docker", "CI/CD"],
    },
  ];

  const certifications: Certification[] = [
    { name: "Certification Name", issuer: "Issuer", year: "2024" },
    { name: "Another Certification", issuer: "Issuer", year: "2023" },
  ];

  const recommendations: Recommendation[] = [
    {
      author: "Person Name",
      role: "Role at Company",
      quote:
        "Write a short recommendation here — what you did well and how you work with others.",
    },
  ];

  const technos = [
    {
      label: "Frontend",
      items: [
        { icon: siHtml5, label: "HTML" },
        { icon: siCss, label: "CSS" },
        { icon: siJavascript, label: "JavaScript" },
        { icon: siTypescript, label: "TypeScript" },
        { icon: siJquery, label: "jQuery" },
        { icon: siReact, label: "React" },
        { icon: siNextdotjs, label: "Next.js" },
        { icon: siAngular, label: "Angular" },
        { icon: siTailwindcss, label: "Tailwind" },
        { icon: siBootstrap, label: "Bootstrap" },
      ],
    },
    {
      label: "Backend",
      items: [
        { icon: siOpenjdk, label: "Java" },
        { icon: siSpring, label: "Spring" },
        { icon: siSpringboot, label: "Spring Boot" },
        { icon: siPhp, label: "PHP" },
        { icon: siLaravel, label: "Laravel" },
      ],
    },
    {
      label: "Database",
      items: [
        { icon: siMysql, label: "MySQL" },
        { icon: siPostgresql, label: "PostgreSQL" },
        { icon: siH2database, label: "H2" },
      ],
    },
    {
      label: "Security",
      items: [{ icon: siJsonwebtokens, label: "JWT" }],
    },
    {
      label: "API",
      items: [
        { icon: siPostman, label: "Postman" },
        { icon: siSwagger, label: "Swagger" },
        { icon: siGraphql, label: "GraphQL" },
      ],
    },
    {
      label: "DevOps",
      items: [
        { icon: siGit, label: "Git" },
        { icon: siGithub, label: "GitHub" },
        { icon: siDocker, label: "Docker" },
        { icon: siKubernetes, label: "Kubernetes" },
        { icon: siJira, label: "Jira" },
      ],
    },
    {
      label: "Conception",
      items: [{ icon: siUml, label: "UML" }],
    },
    {
      label: "Design",
      items: [{ icon: siFigma, label: "Figma" }],
    },
  ];

  return (
    <div className="flex flex-1 justify-center px-4 py-10">
      <main className="w-full max-w-3xl space-y-6">
        <header className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-foreground">Open to work</span>
            <span className="text-muted">•</span>
            <span className="text-muted">Full-time / Freelance</span>
          </div>
          <ThemeToggle />
        </header>

        <section className="rounded-2xl border border-border bg-panel p-6">
          <div className="font-hand text-6xl leading-none text-foreground sm:text-7xl">
            hello
          </div>
          <div className="mt-3 text-sm text-muted">
            {profile.name} — {profile.role}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-panel p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-divider text-sm font-semibold text-foreground">
                {profile.name
                  .split(" ")
                  .slice(0, 2)
                  .map((p) => p[0]?.toUpperCase())
                  .join("")}
              </div>
              <div>
                <div className="text-base font-semibold text-foreground">
                  {profile.name}
                </div>
                <div className="text-sm text-muted">{profile.role}</div>
                <div className="mt-1 text-sm text-muted">{profile.location}</div>
              </div>
            </div>

            <div className="grid gap-2 text-sm">
              <div className="flex items-center justify-between gap-6">
                <span className="text-muted">Email</span>
                <a className="text-foreground hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-muted">Phone</span>
                <a className="text-foreground hover:underline" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-muted">Website</span>
                <a
                  className="text-foreground hover:underline"
                  href={`https://${profile.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.website}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-panel px-4 text-sm font-medium text-foreground hover:bg-divider"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-panel px-4 text-sm font-medium text-foreground hover:bg-divider"
            >
              GitHub
            </a>
          </div>
        </section>

        <SectionCard title="Résumé" right={<SectionPill>About</SectionPill>}>
          <p className="text-sm leading-7 text-muted">{resume}</p>
        </SectionCard>

        <SectionCard title="Contributions" contentClassName="mt-4">
          <ContributionGrid />
        </SectionCard>

        <SectionCard title="Technos" right={<SectionPill>Stack</SectionPill>}>
          <div className="grid gap-6">
            {technos.map((category) => (
              <div key={category.label} className="space-y-3">
                <div className="text-xs font-semibold tracking-wide text-muted">
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
        </SectionCard>

        <SectionCard title="Expériences" right={<SectionPill>Work</SectionPill>}>
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={`${exp.title}-${exp.company}`} className="rounded-xl border border-border bg-panel p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-semibold text-foreground">
                    {exp.title} · {exp.company}
                  </div>
                  <div className="text-xs text-muted">
                    {exp.period}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Formation" right={<SectionPill>Education</SectionPill>}>
          <div className="space-y-3">
            {education.map((ed) => (
              <div key={`${ed.title}-${ed.school}`} className="rounded-xl border border-border bg-panel p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-semibold text-foreground">
                    {ed.title}
                  </div>
                  <div className="text-xs text-muted">{ed.period}</div>
                </div>
                <div className="mt-1 text-sm text-muted">{ed.school}</div>
                {ed.details ? (
                  <div className="mt-2 text-sm text-muted">{ed.details}</div>
                ) : null}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Projets" right={<SectionPill>Selected</SectionPill>}>
          <ProjectsSection projects={projects} initialCount={3} />
        </SectionCard>

        <SectionCard
          title="Certifications"
          right={<SectionPill>Credentials</SectionPill>}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-panel p-4">
                <div className="text-sm font-semibold text-foreground">{c.name}</div>
                <div className="mt-1 text-sm text-muted">
                  {[c.issuer, c.year].filter(Boolean).join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Recommandations"
          right={<SectionPill>People</SectionPill>}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {recommendations.map((r) => (
              <div key={r.author} className="rounded-xl border border-border bg-panel p-4">
                <div className="text-sm font-semibold text-foreground">
                  {r.author}
                </div>
                {r.role ? <div className="text-xs text-muted">{r.role}</div> : null}
                <div className="mt-3 text-sm leading-7 text-muted">“{r.quote}”</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <footer className="pb-6 pt-2 text-center text-xs text-muted">
          Développé par <span className="text-foreground">{profile.name}</span>
        </footer>
      </main>
    </div>
  );
}

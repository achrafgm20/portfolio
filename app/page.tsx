// app/page.tsx
import {
  siAngular,
  siBootstrap,
  siCss,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siGraphql,
  siHtml5,
  siJavascript,
  siJira,
  siJquery,
  siJsonwebtokens,
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
  siAxios,
  siTailwindcss,
  siTypescript,
  siUml,
  siMongodb
} from "simple-icons";

import { ContributionGrid } from "./_components/contribution-grid";
import { EducationCard, type Education } from "./_components/education-card";
import { ExperienceList } from "./_components/experience-list";
import { type Experience } from "./_components/experience-card";
import { ProfileCard, type ProfileInfo } from "./_components/profile-card";
import { ProjectsSection, type Project } from "./_components/projects-section";
import { SectionCard, SectionPill } from "./_components/section-card";
import { StatusBadge } from "./_components/status-badge";
import { TechSection, type TechCategory } from "./_components/tech-section";
import { ThemeToggle } from "./_components/theme-toggle";
import { CertificationCard, type Certification } from "./_components/certification-card";
import { RecommendationCard, type Recommendation } from "./_components/recommendation-card";
import { GithubContributionsComponent } from "./_components/GithubContributions";
import { fetchGithubContributions } from "@/lib/github";

export default async function Home() {
  const githubContributions = await fetchGithubContributions();

  const profile: ProfileInfo = {
    name: "Achraf Ait Haddouch",
    role: "Full-stack Developer",
    location: "Agadir, Morocco",
    email: "achraf.gm@gmail.com",
    phone: "+212 6 55 26 63 91",
    cv: "https://example.com/cv.pdf",
    linkedIn: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  };

  const resume =
    "Junior passionné par la création d'applications web modernes et performantes. Spécialisé dans l'écosystème JavaScript (MongoDB, Express, React, Node.js) et Next.js, je transforme des idées complexes en solutions numériques fluides. Mon approche combine rigueur technique, design moderne avec Tailwind CSS et une volonté constante d'intégrer l'intelligence artificielle pour enrichir l'expérience utilisateur.";

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

  const technos: TechCategory[] = [
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
        { icon: siMongodb, label: "MongoDB" },
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
        { icon: siGraphql, label: "GraphQL" },
        { icon: siAxios, label: "Axios" },
      ],
    },
    {
      label: "DevOps",
      items: [
        { icon: siGit, label: "Git" },
        { icon: siGithub, label: "GitHub" },
        { icon: siDocker, label: "Docker" },
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
          <StatusBadge status="Open to work" details="Full-time / Freelance" />
          <ThemeToggle />
        </header>

        
        <ProfileCard profile={profile} />

        <SectionCard title="Résumé" right={<SectionPill >About</SectionPill>}>
          <p className="text-sm leading-7 text-muted">{resume}</p>
        </SectionCard>

        <SectionCard title="Contributions" contentClassName="mt-4">
          <ContributionGrid />
          <GithubContributionsComponent contributions={githubContributions} />
        </SectionCard>

        <SectionCard title="Technos" right={<SectionPill>Stack</SectionPill>}>
          <TechSection categories={technos} />
        </SectionCard>

        <SectionCard title="Expériences" right={<SectionPill>Work</SectionPill>}>
          <ExperienceList experiences={experiences} />
        </SectionCard>

        <SectionCard title="Formation" right={<SectionPill>Education</SectionPill>}>
          <div className="space-y-3">
            {education.map((ed) => (
              <EducationCard key={`${ed.title}-${ed.school}`} education={ed} />
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
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} />
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Recommandations"
          right={<SectionPill>People</SectionPill>}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {recommendations.map((rec) => (
              <RecommendationCard key={rec.author} recommendation={rec} />
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
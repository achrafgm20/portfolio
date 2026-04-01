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
  siMysql,
  siNextdotjs,
  siPostgresql,
  siPostman,
  siReact,
  siAxios,
  siTailwindcss,
  siTypescript,
  siExpress,
  siUml,
  siMongodb
} from "simple-icons";

import { EducationCard, type Education } from "./_components/education-card";
import { ExperienceList } from "./_components/experience-list";
import { projects } from "@/lib/data";
import { type Experience } from "./_components/experience-card";
import { ProfileCard, type ProfileInfo } from "./_components/profile-card";
import { ProjectsSection } from "./_components/projects-section";
import { SectionCard, SectionPill } from "./_components/section-card";
import { StatusBadge } from "./_components/status-badge";
import { TechSection, type TechCategory } from "./_components/tech-section";
import { ThemeToggle } from "./_components/theme-toggle";
import { CertificationCard, type Certification } from "./_components/certification-card";
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
  // {
  //   title: "Full Developer Intern",
  //   company: "Orange Digital Center",
  //   period: "2025 - 2026 (4 months)",
  //   location: "Agadir, Morocco",
  //   points: [
  //     "Built and shipped features end-to-end in a modern web stack.",
  //     "Improved performance and reliability through profiling and monitoring.",
  //     "Collaborated closely with product/design to deliver iterative releases.",
  //   ],
  // },
  {
    title: "Commercial",
    company: "Comptoir General Du Maroc CGM",
    period: "2021 — 2025",
    location: "Agadir, Morocco",
    points: [
      "Managed client relationships and sales processes.",
      "Improved customer satisfaction through effective communication and follow-ups.",
    ],
  },
];

const education: Education[] = [
  {
    title: "Bootcamp Full Stack Developer ODC",
    school: "Orange Digital Center",
    period: "2025 - 2026 (4 mois)",
    details: "Apprentissage de  React, TypeScript, API , Express , Angular , Docker , AWS , UML BIG O , Algorithme et bonnes pratiques de développement moderne.",
  },
  
  {
    title: "Licence en Économie et Gestion",
    school: "Faculté Ibn Zohr",
    period: "2018 — 2021",
    details: "Formation en économie, gestion, finance et analyse des marchés.",
  },
  
];

  const certifications: Certification[] = [
    { name: "Certification Name", issuer: "Issuer", year: "2024" },
    { name: "Another Certification", issuer: "Issuer", year: "2023" },
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
        { icon: siExpress, label: "Express" },

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
          {/* <AutoVoice /> */}
          <ThemeToggle />
        </header>

        
        <ProfileCard profile={profile} />

        <SectionCard title="Résumé" right={<SectionPill >About</SectionPill>}>
          <p className="text-sm leading-7 text-muted">{resume}</p>
        </SectionCard>

        <SectionCard title="Contributions" contentClassName="mt-4">
          <GithubContributionsComponent contributions={githubContributions} />
        </SectionCard>

        <SectionCard title="Framwork" right={<SectionPill>Stack</SectionPill>}>
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


        <footer className="pb-6 pt-2 text-center text-xs text-muted">
          Développé par <span className="text-foreground">{profile.name}</span>
        </footer>
      </main>
    </div>
  );
}
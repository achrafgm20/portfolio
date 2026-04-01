// lib/github.ts
const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface GithubContributions {
  totalContributions: number;
  contributionDays: ContributionDay[];
}

export async function fetchGithubContributions(): Promise<GithubContributions> {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    // avoid caching stale data (choose one)
    cache: "no-store",
    // or: next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap((week: { contributionDays: ContributionDay[] }) => week.contributionDays);

  return {
    totalContributions:
      data.data.user.contributionsCollection.contributionCalendar
        .totalContributions,
    contributionDays: days,
  };
}
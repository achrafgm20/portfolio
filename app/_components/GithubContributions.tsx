// app/_components/GithubContributions.tsx
import React from "react";
import type { GithubContributions } from "@/lib/github";

type Props = {
  contributions: GithubContributions;
};

export function GithubContributionsComponent({ contributions }: Props) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="mb-2 text-sm font-medium text-foreground">
        GitHub Contributions
      </div>

      <p className="text-sm text-muted">
        Total Contributions:{" "}
        <span className="text-foreground font-medium">
          {contributions.totalContributions}
        </span>
      </p>

      <div className="mt-3 grid grid-cols-7 gap-1">
        {contributions.contributionDays.map((day) => (
          <div
            key={day.date}
            title={`${day.date}: ${day.contributionCount} contributions`}
            className={`h-4 w-4 rounded ${
              day.contributionCount === 0
                ? "bg-divider"
                : day.contributionCount < 3
                  ? "bg-accent/30"
                  : day.contributionCount < 6
                    ? "bg-accent/60"
                    : "bg-accent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
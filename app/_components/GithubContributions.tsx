// app/_components/GithubContributions.tsx
import React from "react";
import type { GithubContributions } from "@/lib/github";

type Props = {
  contributions: GithubContributions;
};

export function GithubContributionsComponent({ contributions }: Props) {
  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-700"; 
    if (count <= 2) return "bg-[#9be9a8]";
    if (count <= 4) return "bg-[#40c463]";
    if (count <= 5) return "bg-[#30a14e]";
    return "bg-[#216e39]";
  };

  return (
    <div className="w-full border border-border rounded-xl bg-card p-4 shadow-sm">
      {/* 1. overflow-x-auto: allows horizontal scrolling
          2. custom-scrollbar: (optional) helps user see it's scrollable 
      */}
      <div className="w-full overflow-x-auto pb-2  scrollbar-hide">
        {/* 3. min-w-max: prevents the grid from shrinking smaller than its content
            4. flex items: sometimes helps with internal spacing on mobile 
        */}
        <div 
          className="grid grid-rows-7 grid-flow-col gap-0.75 min-w-max"
          style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}
        >
          {contributions.contributionDays.map((day) => (
            <div
              key={day.date}
              title={`${day.date}: ${day.contributionCount} contributions`}
              className={`h-2.5 w-2.5 rounded-xs ${getColor(day.contributionCount)} transition-colors`}
            />
          ))}
        </div>
      </div>

      {/* Footer stays fixed below the scroll area */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7d8590]">
        <span>
          {contributions.totalContributions} contributions in 2026 on{" "}
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors font-medium">
            GitHub
          </a>.
        </span>
        
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-0.75">
            {[0, 2, 4, 5, 10].map((val, i) => (
              <div 
                key={i} 
                className={`h-2.5 w-2.5 rounded-xs ${getColor(val)}`} 
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
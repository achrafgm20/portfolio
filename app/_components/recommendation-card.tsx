// app/_components/recommendation-card.tsx
export interface Recommendation {
  author: string;
  role?: string;
  quote: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-foreground">
        {recommendation.author}
      </div>
      {recommendation.role && (
        <div className="text-xs text-muted">{recommendation.role}</div>
      )}
      <div className="mt-3 text-sm leading-7 text-muted">
        &ldquo;{recommendation.quote}&rdquo;
      </div>
    </div>
  );
}
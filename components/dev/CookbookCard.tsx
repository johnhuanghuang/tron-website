import { Clock } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

interface CookbookCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  href?: string;
}

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

export function CookbookCard({ title, description, category, difficulty, time, href = "#" }: CookbookCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block p-5 rounded-2xl border border-[var(--color-border)]",
        "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-surface)]",
        "hover:border-[var(--color-border-hover)] transition-all duration-300"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <Badge variant="outline" className="text-xs">{category}</Badge>
        <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", difficultyColors[difficulty])}>
          {difficulty}
        </span>
      </div>
      <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[rgb(251,113,133)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-tertiary)] mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
        <Clock size={12} weight="bold" />
        {time}
      </div>
    </a>
  );
}

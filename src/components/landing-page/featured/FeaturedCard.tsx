import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function FeaturedCard({
    title,
    description,
    tag,
    stats,
}: {
    title: string
    description: string
    tag?: string
    stats?: {
        stars: number;
        feedback: number;
    }
}) {
    return (
        <div className={cn(
            "group relative flex flex-col h-full p-8 rounded-[32px] transition-all duration-500",
            "bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-gray-300 dark:border-white/5",
            "hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 "
        )}>
            {/* Top Section: Tag and Action */}
            <div className="flex items-center justify-between mb-10">
                {tag && (
                    <Badge variant="outline" className="px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border-primary/20 bg-primary/5 text-primary rounded-full transition-all group-hover:bg-primary group-hover:text-primary-foreground transform group-hover:scale-105 duration-300">
                        {tag}
                    </Badge>
                )}
                <div className="p-2.5 rounded-full border border-border/40 group-hover:border-primary/40 opacity-40 group-hover:opacity-100 transition-all duration-500 cursor-pointer hover:bg-primary/10">
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
            </div>

            {/* Core Content */}
            <div className="grow flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors line-clamp-3">
                    {description}
                </p>
            </div>

            {/* Subtle Footer Stats */}
            <div className="flex items-center justify-between pt-8 mt-12 border-t border-border/5">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 group/stat">
                        <Star size={14} className="text-primary fill-primary/10 group-hover/stat:fill-primary transition-all duration-300" />
                        <span className="text-xs font-bold font-mono tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
                            {stats?.stars?.toLocaleString() || 0}
                        </span>
                    </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300">
                    Featured
                </span>
            </div>

            {/* Ambient Background Gradient (Visible on hover) */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[32px]" />
        </div>
    );
}
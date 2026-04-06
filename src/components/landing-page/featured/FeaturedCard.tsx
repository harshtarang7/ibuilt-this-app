import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
    title: string;
    description: string;
    tags?: string[];
    stats?: {
        stars: number;
        feedback: number;
    };
    className?: string;
}

export default function FeaturedCard({
    title,
    description,
    tags = [],
    stats,
    className,
}: FeaturedCardProps) {
    return (
        <div className={cn(
            "group relative flex flex-col h-full p-8 rounded-[32px] transition-all duration-500 overflow-hidden",
            "bg-white/3 dark:bg-black/40 backdrop-blur-2xl border border-white/10 dark:border-white/5",
            "hover:border-primary/40 hover:bg-white/[0.07] dark:hover:bg-white/5",
            "hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]",
            "hover:-translate-y-2",
            className
        )}>
            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Background Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all duration-700 pointer-events-none" />

            {/* Top Section: Tags and Action */}
            <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="flex flex-wrap gap-2 max-w-[80%]">
                    {tags.map((tag, idx) => (
                        <Badge 
                            key={idx}
                            variant="secondary" 
                            className={cn(
                                "px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border border-white/5",
                                "bg-white/5 text-muted-foreground transition-all duration-300",
                                "group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                            )}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="shrink-0 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                    <ArrowUpRight size={18} className="text-foreground/70 group-hover:text-white transition-colors" />
                </div>
            </div>

            {/* Core Content */}
            <div className="grow flex flex-col space-y-4 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/70 group-hover:text-muted-foreground transition-colors line-clamp-3">
                    {description}
                </p>
            </div>

            {/* Footer Stats & Avatars */}
            <div className="flex items-center justify-between pt-8 mt-10 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group/stat">
                        <div className="p-1.5 rounded-lg bg-yellow-500/10 group-hover/stat:bg-yellow-500/20 transition-colors">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        </div>
                        <span className="text-sm font-bold font-mono tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
                            {stats?.stars?.toLocaleString() || 0}
                        </span>
                    </div>
                </div>

                {/* Simulated build-with avatars */}
                <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                        <div 
                            key={i} 
                            className="w-7 h-7 rounded-full border-2 border-background/50 bg-muted/20 backdrop-blur-sm shadow-sm flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-primary/20"
                        >
                           <div className={cn(
                               "w-full h-full bg-linear-to-br",
                               i === 1 ? "from-blue-500/20 to-cyan-500/20" : 
                               i === 2 ? "from-purple-500/20 to-pink-500/20" : 
                               "from-orange-500/20 to-red-500/20"
                           )} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
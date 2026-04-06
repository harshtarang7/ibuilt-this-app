import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatCards({
    icon: Icon,
    value,
    label,
    className,
}: {
    icon: LucideIcon
    value: string
    label: string
    className?: string
}) {
    return (
        <div className={cn(
            "group relative flex flex-col items-center justify-center p-8 transition-all duration-500 hover:-translate-y-2",
            className
        )}>
            {/* Background Halo effect on hover */}
            <div className="absolute inset-x-0 top-0 h-full w-full bg-linear-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl -z-10 blur-2xl" />
            
            {/* Subtle card container */}
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-3xl transition-all duration-300 group-hover:border-primary/20 -z-10 shadow-sm" />

            {/* Icon section with glow */}
            <div className="relative mb-6">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                
                {/* Glass Icon Container */}
                <div className="relative p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_-2px_rgba(var(--primary),0.4)] group-hover:scale-110">
                    <Icon 
                        className="size-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                        strokeWidth={1.5} 
                    />
                </div>
            </div>

            {/* Stats numeric value */}
            <div className="relative flex flex-col items-center text-center">
                <h3 className="text-5xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
                    {value}
                </h3>
                
                {/* Separator / Accent decoration */}
                <div className="my-4 w-12 h-0.5 bg-border group-hover:w-20 group-hover:bg-primary/40 transition-all duration-500 rounded-full" />
                
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
                    {label}
                </p>
            </div>

            {/* Decoration corners */}
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    )
}
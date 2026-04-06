import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, RocketIcon, UserIcon, EyeIcon } from "lucide-react";
import StatCards from "./StatsCard";


const statsData = [
    {
        icon: RocketIcon,
        value: "1.5K+",
        label: "Project Shared"
    },
    {
        icon: UserIcon,
        value: "2K+",
        label: "Active Users"
    },
    {
        icon: EyeIcon,
        value: "10K+",
        label: "Monthly Views"
    },
]

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-background">

            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full delay-1000 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 blur-[150px] rounded-full" />
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary rounded-full font-medium backdrop-blur-sm flex items-center gap-2 group transition-all hover:bg-primary/10">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="text-secondary-foreground font-semibold">Join thousands of creators sharing their work</span>
                        <div className="w-1 h-1 rounded-full bg-blue-800 animate-ping ml-1" />
                    </Badge>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 leading-[1.1]">
                    Share What You&apos;ve <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-secondary animate-gradient-x">Built</span>,
                    <br />  Discover What&apos;s <span className="italic font-serif font-medium text-accent-foreground">Launching</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects.
                    <span className="hidden md:inline font-medium text-foreground/80 ml-1">
                        Authentic launches, real builders, and genuine feedback.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 gap-2 group text-white">
                        <Rocket className="w-5 h-5 group-hover:animate-bounce " />
                        Share your project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold border-gray-700 transition-all hover:bg-muted/50 hover:shadow-md hover:shadow-secondary/5">
                        Explore projects
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 w-full max-w-5xl mx-auto pt-8">
                    {statsData.map((stat) => {
                        return (
                            <StatCards key={stat.label} {...stat} />
                        )
                    })}
                </div>

            </div>
        </section>
    );
}

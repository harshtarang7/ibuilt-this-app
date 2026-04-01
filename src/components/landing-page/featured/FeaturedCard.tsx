import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Star, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturedCard({
    title,
    description,
    tag,
    stats
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
        <Card className="group relative overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
            <CardHeader className="space-y-3 pb-4">
                <div className="flex items-center justify-between">
                    {tag && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary-foreground/90 font-medium hover:bg-primary/20 backdrop-blur-md">
                            {tag}
                        </Badge>
                    )}
                    <button className="text-muted-foreground/60 hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                    </button>
                </div>
                <div>
                    <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground/80 line-clamp-2 mt-1 leading-relaxed">
                        {description}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-32 w-full rounded-lg bg-muted/40 animate-pulse-slow overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                    <div className="flex items-center justify-center h-full text-muted-foreground/30 italic text-sm">
                        Project Preview
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-xs pt-4 border-t border-border/40">
                <div className="flex items-center gap-4 text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                        <Star size={14} className="text-orange-400 fill-orange-400/20" />
                        {stats?.stars || 0}
                    </span>
                    {/* <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                        <MessageSquare size={14} className="text-blue-400 fill-blue-400/20" />
                        {stats?.feedback || 0}
                    </span> */}
                </div>
                <span className="text-muted-foreground/40 font-mono tracking-wider italic uppercase">
                    verified launch
                </span>
            </CardFooter>
        </Card>
    );
}
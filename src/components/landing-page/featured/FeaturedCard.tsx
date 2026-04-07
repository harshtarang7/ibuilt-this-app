import { ExternalLink, Star, ArrowUpRight, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    description: string;
    tags: string[];
    isFeatured: boolean;
    votes: number;
}

export default function FeaturedCard(product: Product) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className={cn(
                "group flex flex-col h-full p-6 rounded-2xl border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300"
            )}>
                {/* Top Section: Tags and Action */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex flex-wrap gap-2 max-w-[80%]">
                        {/* Main Featured Badge */}

                        {product.tags.map((tag, idx) => (
                            <Badge
                                key={idx}
                                variant="secondary"
                                className="px-2.5 py-0.5 text-[10px] font-semibold uppercase rounded-md border border-neutral-200 dark:border-neutral-800"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowUpRight size={18} />
                    </div>
                </div>

                {/* Core Content */}
                <div className="grow space-y-3">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3">
                        {product.description}
                    </p>
                </div>

                {/* Footer Stats & Avatars */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <Star size={14} className="text-amber-500 fill-amber-500" />
                            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                {product.votes?.toLocaleString() || 0}
                            </span>
                        </div>
                    </div>

                    <div>
                        {product.isFeatured && (
                            <Badge
                                variant="default"
                                className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md bg-primary text-white border-transparent"
                            >
                                <StarIcon size={15} />  Featured
                            </Badge>
                        )}
                    </div>

                    {/* Simplified avatars */}
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={cn(
                                    "w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-neutral-200 dark:bg-neutral-800 transition-colors",
                                    i === 1 ? "bg-blue-100 dark:bg-blue-900/30" :
                                        i === 2 ? "bg-purple-100 dark:bg-purple-900/30" :
                                            "bg-orange-100 dark:bg-orange-900/30"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
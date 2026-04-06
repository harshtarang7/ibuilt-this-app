import SectionHeader from "@/components/common/SectionHeader";
import FeaturedCard from "./FeaturedCard";
import { Sparkles } from "lucide-react";

const cardData = [
    {
        title: "MagicUI components",
        description: "A comprehensive library of modern components for React and Tailwind CSS developers.",
        tag: "UI Library",
        stats: { stars: 1243, feedback: 85 }
    },
    {
        title: "ChatGenius AI",
        description: "Next-generation conversational AI that understands complex nuances in real-time customer talk.",
        tag: "Artificial Intelligence",
        stats: { stars: 840, feedback: 120 }
    },
    {
        title: "PaperFlow",
        description: "Simplify your research workflow with easy-to-use paper management and citation tools.",
        tag: "Productivity",
        stats: { stars: 520, feedback: 42 }
    },
];

export default function Featured() {
    return (
        <section className="py-16 w-full space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between">
                <SectionHeader
                    title="Featured Projects"
                    description="Explore high-quality projects curated from the community. Built by creators, for creators."
                    icon={Sparkles}
                />
                <button className="bg-primary px-4 py-2 text-white rounded-[10px] cursor-pointer"> View All</button>
            </div>
            {/* <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
                    <Sparkles size={16} />
                    <span>Selected Picks</span>
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.2]">
                    Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary italic font-serif">Projects</span>
                </h3>
                <p className="text-muted-foreground max-w-xl text-balance">
                    Explore high-quality projects curated from the community.
                    Built by creators, for creators.
                </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {cardData.map((card) => (
                    <FeaturedCard key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
}
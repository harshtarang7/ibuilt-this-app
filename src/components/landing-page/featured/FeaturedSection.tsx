import SectionHeader from "@/components/common/SectionHeader";
import FeaturedCard from "./FeaturedCard";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import getFeaturedProducts from "@/lib/products/product.select";



export default async function Featured() {
    const products = await getFeaturedProducts();

    return (
        <section className="py-16 w-full space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center justify-between">
                <SectionHeader
                    title="Featured Projects"
                    description="Explore high-quality projects curated from the community. Built by creators, for creators."
                    icon={Sparkles}
                />
                <button className="bg-primary px-4 py-2 text-white rounded-[10px] cursor-pointer">
                    <Link href={'/explore'}>View All
                    </Link></button>
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
                {products.map((product) => (
                    <FeaturedCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}
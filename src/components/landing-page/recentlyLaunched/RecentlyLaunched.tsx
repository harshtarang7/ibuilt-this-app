import SectionHeader from "@/components/common/SectionHeader"
import { RocketIcon } from "lucide-react"

export default function RecentlyLaunched() {
    const recentlyLaunchedData = []
    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader
                    title="Recently launched"
                    description="Discover the latest products from our community"
                    icon={RocketIcon}
                />

                {/* {
                    recentlyLaunchedData.length>0 ? (
                        <div className="grid-wrapper">
                            {recentlyLaunchedData.map((product)=>(
                                <ProductCard key={product.id} product={product]/>
                            ))}
                        </div>
                    ) 
                } */}
            </div>
        </section>
    )

}
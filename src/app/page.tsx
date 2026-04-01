import Featured from "@/components/landing-page/featured/FeaturedSection";
import HeroSection from "@/components/landing-page/HeroSection";

export default function Home() {
  return (
    <div className="max-w-[90%] mx-auto">
      <HeroSection />
      <Featured />
    </div>
  );
}

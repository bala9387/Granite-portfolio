import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FactorySection } from "@/components/home/FactorySection";
import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <FactorySection />
      <ApplicationsSection />
      <PortfolioPreview />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

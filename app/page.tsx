import Hero from "@/components/home/Hero";
import BrandEssence from "@/components/home/BrandEssence";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import Testimonials from "@/components/home/Testimonials";
import Awards from "@/components/home/Awards";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandEssence />
      <FeaturedProjects />
      <Philosophy />
      <Testimonials />
      <Awards />
      <CTA />
    </>
  );
}

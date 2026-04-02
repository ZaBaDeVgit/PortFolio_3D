import HeroSection from "@/components/hero-section";
import CounterSection from "@/components/counter-section";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <>
      <PageTransition />
      <HeroSection />
      <CounterSection />
    </>
  );
}

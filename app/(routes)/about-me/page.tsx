"use client";

import PageTransition from "@/components/page-transition";
import Timeline from "@/components/timeline";
import CounterSection from "@/components/counter-section";

export default function AboutPage() {
  return (
    <>
      <PageTransition />
      <div className="pt-28">
        <CounterSection />
        <Timeline />
      </div>
    </>
  );
}

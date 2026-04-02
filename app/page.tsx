import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="relative">
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover relative overflow-hidden">
        <CoverParticles />
        <div className="relative z-10 w-full">
          <Introduction />
        </div>
      </div>
    </main>
  );
}

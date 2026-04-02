import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="relative w-full min-h-[100vh] min-h-[100dvh]">
      <TransitionPage />
      <div className="relative w-full min-h-[100vh] min-h-[100dvh] overflow-hidden">
        <CoverParticles />
        <div className="relative z-10 w-full min-h-[100vh] min-h-[100dvh]">
          <Introduction />
        </div>
      </div>
    </main>
  );
}

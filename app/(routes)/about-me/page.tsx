import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterSkills from "@/components/counter-skills";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <div>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-4xl md:text-5xl font-black text-center md:text-left mb-8">
          Toda mi{' '}
          <span className="text-gradient-primary">trayectoria</span>
        </h1>
        <CounterSkills />
        <TimeLine />
      </ContainerPage>
    </div>
  );
}

export default PageAboutMe;

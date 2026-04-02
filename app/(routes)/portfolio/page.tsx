import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />
      <div className="flex flex-col justify-center min-h-screen">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
          Mis últimos <span className="text-gradient-primary">trabajos</span>
        </h1>
        <p className="text-center text-white/60 mb-12 max-w-lg mx-auto">
          Una selección de proyectos que demuestran mi pasión por el desarrollo y el diseño
        </p>
        <div className="relative z-10 grid max-w-6xl gap-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
}

export default PortfolioPage;

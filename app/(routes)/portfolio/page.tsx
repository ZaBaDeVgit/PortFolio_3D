import { dataPortfolio } from "@/data";
import PortfolioCard from "@/components/portfolio-card";

export default function PortfolioPage() {
  return (
    <div className="pt-24 px-6 pb-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Mis <span className="text-red-600">Proyectos</span>
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataPortfolio.map((project, index) => (
          <PortfolioCard key={project.id} data={project} index={index} />
        ))}
      </div>
    </div>
  );
}

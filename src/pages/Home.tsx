import HeroSection from '../sections/HeroSection';
import PainPointsSection from '../sections/PainPointsSection';
import SolutionCompareSection from '../sections/SolutionCompareSection';
import AdvantagesSection from '../sections/AdvantagesSection';
import PlatformSection from '../sections/PlatformSection';
import DataAISection from '../sections/DataAISection';
import ProjectsSection from '../sections/ProjectsSection';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <SolutionCompareSection />
      <AdvantagesSection />
      <PlatformSection />
      <DataAISection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
}

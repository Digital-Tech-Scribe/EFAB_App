import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import CommunitySection from '../components/CommunitySection';
import StatsSection from '../components/StatsSection';
import GallerySliderSection from '../components/GallerySliderSection';
import CEOQuoteSection from '../components/CEOQuoteSection';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero with Intro Sequence */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Section 2: About/Mission */}
      <div id="about" className="relative z-20">
        <AboutSection />
      </div>

      {/* Section 3: Expertise */}
      <div id="expertise" className="relative z-30">
        <ServicesSection />
      </div>

      {/* Section 4: Projects with Filter Tabs */}
      <div id="landmarks" className="relative z-40">
        <ProjectsSection />
      </div>

      {/* Section 5: Community Dev (3 Pillars + Video) */}
      <div id="community" className="relative z-50">
        <CommunitySection />
      </div>

      {/* Section 6: Stats */}
      <div id="stats" className="relative z-[60]">
        <StatsSection />
      </div>

      {/* Section 7: Gallery Slider */}
      <div id="gallery" className="relative z-[70]">
        <GallerySliderSection />
      </div>

      {/* Section 8: CEO Quote */}
      <div id="ceo-quote" className="relative z-[90]">
        <CEOQuoteSection />
      </div>
    </>
  );
}
